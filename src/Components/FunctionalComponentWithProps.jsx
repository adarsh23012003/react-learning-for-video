import React from 'react'

function FunctionalComponentWithProps(props) {
  return (
    <>
      <h5>{props.name}</h5>
      {props.children}
    </>
  );
}

export default FunctionalComponentWithProps