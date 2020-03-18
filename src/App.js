/* eslint-disable lines-between-class-members */
import React from 'react';
import './App.css';
import Days from './Days';

class App extends React.Component {
  state = {
    days: [],
  };
  handleChangeAddDays = myday => {
    this.setState({ days: [...this.state.days, myday] });
  };
  handleChangeRemoveDays = myday => {
    const arr = this.state.days.splice(this.state.days.indexOf(myday));
    this.setState({ days: this.state.days });
  };
  render() {
    console.log(this.state.days);
    return (
      <div className="App">
        <Days
          days={this.state.days}
          addMethod={this.handleChangeAddDays}
          removeMethod={this.handleChangeRemoveDays}
        />
      </div>
    );
  }
}

export default App;
