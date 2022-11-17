import React, { Component } from 'react'

export default class ClassComponentWithProps extends Component {
  render() {
    return (
        <>
        <div>Hello - {this.props.name}</div>
        </>
    )
  }
}
