
import React, { Component } from 'react'

export class Employees extends Component {
  static propTypes = {}

  render(props) {
    return (
      <div id='card-emp' className= {this.props.className}> Name:-  {this.props.name}<br></br>DOB:    {this.props.Dob}<br></br> Designation:- {this.props.designation}<br></br>EXP:-{this.props.experience}   Years</div>
    )
  }
}

export default Employees;