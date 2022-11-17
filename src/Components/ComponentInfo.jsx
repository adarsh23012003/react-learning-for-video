import React from 'react'
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'

function ComponentInfo() {
  return (
    <>
      <h1>ComponentInfo :-</h1>
      <h3>Component are two type </h3>
      <h5>1. Functional Component</h5>
      <FunctionalComponent />
      <h5>2. Class Component</h5>
      <ClassComponent />
    </>
  );
}

export default ComponentInfo