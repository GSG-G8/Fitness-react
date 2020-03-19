import React from 'react';
import Excersise from './Excersise';

const DisplayDays = props => {
  const { days } = props;
  const { addMethod } = props;
  const { removeMethod } = props;
  const { excersise } = props;
  return days.map(day => (
    <div key={day}>
      <div style={{ color: 'red' }}>{day}</div>
      <Excersise
        myExcersise={excersise}
        myDay={day}
        addMethod={addMethod}
        removeMethod={removeMethod}
      />
    </div>
  ));
};

export default DisplayDays;
