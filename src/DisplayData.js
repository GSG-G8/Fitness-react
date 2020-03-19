import React from 'react';

const DisplaData = ({ days, excersise }) => {
  return (
    <div>
      <h2 style={{ color: 'blue' }}>My excersise schedule</h2>
      {days.map(day => (
        <>
          <br />
          <span key={day} style={{ color: 'red' }}>
            {day}
          </span>
          {excersise[day].map(e => (
            <span key={e} style={{ padding: 5 }}>
              {e}
            </span>
          ))}
          <br />
        </>
      ))}
    </div>
  );
};

export default DisplaData;
