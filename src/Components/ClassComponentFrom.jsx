import React, { Component } from 'react'

export default class ClassComponentFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };
  }
  inputName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  inputPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  formSubmit = (event)=>{
    event.preventDefault();         //Form refresh (page reload na ho)
  }
  render() {
    return (
      <>
        <div>ClassComponentFrom</div>
        <form action=''>
          <div>
            <label htmlFor=''>Name:</label>
            <input
              type='text'
              placeholder='Enter name'
              onChange={this.inputName}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              value={this.state.password}
              onChange={this.inputPassword}
            />
          </div>
          <div>
            <button onSubmit={this.formSubmit}>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
