import React, { Component } from "react"
import { PropTypes } from "prop-types"

class Employees extends Component {
  render() {
    return (
      <div>
        <p>Employee Name: {this.props.name} </p>
        <p>Age: {this.props.age}</p>
      </div>
    )
  }
}
Employees.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,

  propArray: PropTypes.array,
  propBool: PropTypes.bool,
  propFunc: PropTypes.func,
  propNumber: PropTeyps.number.isRequired,
  propObject: PropTypes.object.isRequired,
  propString: PropTypes.string.isRequired,
}

export default Employees

const Employees = props => {
  return (
    <div>
      <p>Employee Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

class Container extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

Container.propTypes = {
  children: PropTypes.element,
}

class Numbers extends React.Component {
  render() {
    const numbers = this.props.numbers.map(number => <p>{number}</p>)
    return <div>{numbers}</div>
  }
}
