import React, { Component } from "react";
import "./App.css";
import SelectList from "./SelectList";
import InputCommittee from "./InputCommittee";
import DisplayResualtList from "./DisplayResualtList";

class App extends Component {
  state = {
    mandate: 7,
    sumOfVotes: 0,
    displayResault: false,
    committees: [
      {
        id: 0,
        name: "",
        vote: null,
        mandates: 0
      },
      {
        id: 1,
        name: "",
        vote: null,
        mandates: 0
      }
    ]
  };

  handleSelectCommittee = e => {
    const value = parseInt(e.target.value);
    const committees = [...this.state.committees];
    if (value > this.state.committees.length) {
      for (let index = this.state.committees.length; index < value; index++) {
        committees.push({ id: index, name: "", vote: null, mandates: 0 });
      }
    } else if (value < this.state.committees.length) {
      committees.splice(value, committees.length - value);
    }

    const newCommittes = this.count(committees);
    this.checkResault(newCommittes);
    this.setState({
      committees: newCommittes
    });
  };

  handleSelectMandate = e => {
    const type = e.target.id;
    const value = parseInt(e.target.value);
    this.setState({
      [type]: value
    });
    const newCommittes = this.count(this.state.committees, value);
    this.checkResault(newCommittes);
    this.setState({
      committees: newCommittes
    });
  };

  handleInputCommittee = e => {
    const committees = this.state.committees.map(committee => {
      if (committee.id === parseInt(e.target.name)) {
        if (e.target.type === "number") {
          committee.vote = parseInt(e.target.value);
        }
        if (e.target.type === "text") {
          committee.name = e.target.value;
        }
      }
      return committee;
    });
    const newCommittes = this.count(committees);
    this.checkResault(newCommittes);
    this.setState({
      committees: newCommittes
    });
  };

  count = (committees, mandate = this.state.mandate) => {
    let sumOfVotes = 0;
    for (let index = 0; index < committees.length; index++) {
      sumOfVotes += committees[index].vote;
    }
    const numbers = [];

    for (let y = 0; y < committees.length; y++) {
      const number = [];
      for (let i = 1; i < mandate + 1; i++) {
        number.push({
          id: committees[y].id,
          n: committees[y].vote / i
        });
      }
      numbers.push(number);
    }

    const numbers2 = [];
    for (let z = 0; z < numbers.length; z++) {
      numbers2.push(...numbers[z]);
    }

    numbers2.sort((a, b) => b.n - a.n);
    const numbers3 = numbers2.splice(0, mandate);

    committees.forEach(committee => {
      let mandate = 0;
      numbers3.forEach(item => {
        if (item.id === committee.id) {
          mandate++;
        }
      });
      committee.mandates = mandate;
      return committee;
    });
    console.log(committees);
    if (this.state.sumOfVotes !== sumOfVotes) {
      this.setState({
        sumOfVotes
      });
    }
    return committees;
  };

  checkResault = committes => {
    let displayResault = true;
    committes.forEach(committe => {
      if (!(committe.name && committe.vote)) displayResault = false;
      console.log(Boolean(committe.name));
      console.log(Boolean(committe.vote));
    });
    this.setState({ displayResault });
  };
  render() {
    const inputCommittee = this.state.committees.map(committee => {
      return (
        <InputCommittee
          key={committee.id}
          numberCommittee={committee.id}
          handleInputCommittee={this.handleInputCommittee}
        />
      );
    });

    return (
      <div className="App">
        <SelectList
          handleSelectMandate={this.handleSelectMandate}
          handleSelectCommittee={this.handleSelectCommittee}
        />
        {inputCommittee}
        {this.state.displayResault && (
          <DisplayResualtList
            committees={this.state.committees}
            sumOfVotes={this.state.sumOfVotes}
            mandate={this.state.mandate}
          />
        )}
      </div>
    );
  }
}

export default App;
