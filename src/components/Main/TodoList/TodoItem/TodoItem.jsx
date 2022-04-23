import React, { Component } from "react";
import './TodoItem.css'

class TodoItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }

  handleChecked = () =>{
    this.setState({checked: !this.state.checked })
  }

  
  
  render() {
    const {task} = this.props.data;
    console.log(task);
    return <div>
      <label htmlFor="check" className={this.state.checked?"strike":""}>Task: {task}</label>
      <input type="checkbox" name="check" id="check" onChange={this.handleChecked}/>
      <button onClick={this.props.remove}>Delete task</button>
    </div>;
  }
}

export default TodoItem;
