import React from 'react';

const myExercise = ['Pushups', 'Squats','Dumbbell rows', 'Burpees', 'Pull-ups/ Chin-ups', 'Running', 'Swimming Tests', 'Ruck Marches'];

const Exercise = (props) => {
  const {myDay} = props;
  const {addMethod} = props;
  const {removeMethod} = props;
  const {myExcersise} = props;

return (
<div>
  {myExercise.map(exercise => (
    <div key={exercise}>
    <label htmlFor={exercise}>{exercise}</label>
     <input id={exercise} type='checkbox' value={exercise}  onChange={
          (e) =>  ((myExcersise[myDay].indexOf(exercise)===-1)? addMethod(myDay, exercise) : removeMethod(myDay, exercise)) }/>
    </div>
   
  ))}
</div>
)
}

export default Exercise;
