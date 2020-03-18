import React from 'react';

const Days = (props) => {
  const { days } = props;
  return (
    <form className='formDays'>
      <fieldset>
        <legend>Select your days</legend>
        <label htmlFor="saturday">Saturday</label>
        <input id='saturday' type='checkbox' value='saturday'  onChange={
          (e) => ((days.indexOf(e.target.value)===-1) ? props.addMethod(e.target.value) :props.removeMethod(e.target.value) )} />
        <label htmlFor='sunday'>Sunday</label>
        <input id='sunday' type='checkbox' value='sunday' onChange={
          (e) => ((days.indexOf(e.target.value)===-1) ? props.addMethod(e.target.value) :props.removeMethod(e.target.value) )}  />
        <label htmlFor='monday'>monday</label>
        <input id='monday' type='checkbox' value='monday'  onChange={
          (e) => ((days.indexOf(e.target.value)===-1) ? props.addMethod(e.target.value) :props.removeMethod(e.target.value) )} />
        <label htmlFor='tuesday'>Tuesday</label>
        <input id='tuesday' type='checkbox' value='tuesday'  onChange={
          (e) => ((days.indexOf(e.target.value)===-1) ? props.addMethod(e.target.value) :props.removeMethod(e.target.value) )} />
        <label htmlFor='wednesday'>Wednesday</label>
        <input id='wednesday' type='checkbox' value='wednesday'  onChange={
          (e) => ((days.indexOf(e.target.value)===-1) ? props.addMethod(e.target.value) :props.removeMethod(e.target.value) )} />
        <label htmlFor='thursday'>Thursday</label>
        <input id='thursday' type='checkbox' value='thursday'  onChange={
          (e) => ((days.indexOf(e.target.value)===-1) ? props.addMethod(e.target.value) :props.removeMethod(e.target.value) )} />
      </fieldset>
    </form>
  );
};


export default Days;
