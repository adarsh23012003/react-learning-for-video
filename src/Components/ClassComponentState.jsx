import React, { Component } from 'react'

export default class ClassComponentState extends Component {
  // Using state
  /**
   * make a constructor
   * super() ==> Component class ko incerate karne ke liya
   */

  constructor() {
    super();
    this.state = {
      massage: "Class Component State using State",
      mass: "hit on change button to Change State value"
    };

}
    change(){
        this.setState(
            {massage:"massage is Change"}
        )
    }
  render() {
    return (
        <>
        <h4>{this.state.massage}</h4>
        <p>{this.state.mass}</p>
        <button onClick={()=>{this.change()}}>Change</button>
        </>
    )
  }
}
