/* eslint-disable lines-between-class-members */
import React from 'react';
import './App.css';
import Days from './Days';
import DisplayDays from './DisplayDays';
import Exercise from './Excersise';

class App extends React.Component {
  state = {
    days: [],
    myExcersise: {
      saturday: [],
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
    },
  };

  handleChangeAddDays = myday => {
    this.setState({ days: [...this.state.days, myday] });
  };
  handleChangeRemoveDays = myday => {
    const arr = this.state.days.splice(this.state.days.indexOf(myday));
    this.setState({ days: this.state.days });
  };

  handleChangeAddExcer = (day, excersise) => {
    console.log({ day, excersise });
    const { myExcersise } = this.state;
    this.setState({
      myExcersise: {
        ...myExcersise,
        [day]: [...myExcersise[day], excersise],
      },
    });
  };

  handleChangeRemoveExcer = (day, excersise) => {
    const { myExcersise } = this.state;
    this.setState({
      myExcersise: {
        ...myExcersise,
        [day]: myExcersise[day].filter(e => e !== excersise),
      }
    })

  }

  render() {
    console.log(this.state.days);
    console.log('my excersise', this.state.myExcersise);
    return (
      <div className="App">
        <Days
          days={this.state.days}
          addMethod={this.handleChangeAddDays}
          removeMethod={this.handleChangeRemoveDays}
        />
        <DisplayDays
          days={this.state.days}
          excersise={this.state.myExcersise}
          addMethod={this.handleChangeAddExcer}
          removeMethod={this.handleChangeRemoveExcer}
        />
      </div>
    );
  }
}

export default App;
