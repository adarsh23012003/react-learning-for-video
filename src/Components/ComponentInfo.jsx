import React from 'react'
import FunctionalComponent from './FunctionalComponent'
import FunctionalComponentWithProps from './FunctionalComponentWithProps';
import ClassComponent from './ClassComponent'
import ClassComponentWithProps from './ClassComponentWithProps';

function ComponentInfo() {
  return (
    <>
      <h1>ComponentInfo :-</h1>
      <h3>Component are two type </h3>
      <h5>1. Functional Component</h5>
      <FunctionalComponent />
      <FunctionalComponentWithProps name='Functional Component With Props'>
        <p>This is a props component with (props.children)</p>
      </FunctionalComponentWithProps>
      <h5>2. Class Component</h5>
      <ClassComponent />
      <ClassComponentWithProps name='Adarsh'/>
    </>
  );
}

export default ComponentInfo