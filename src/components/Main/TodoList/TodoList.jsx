import React, { Component } from "react";
import TodoItem from './TodoItem'
import dataTasks from './tasks.json';
import './TodoList.css'

export class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: dataTasks, //si se llama arriba solo tasks aquí podemos poner solo tasks para abreviar
    }
  }

  addTask = (event) => {

    event.preventDefault(); //esto para el formulario para leer los inputs
    const task = event.target.task.value

    //añadir al estado lastCake el último cake. Para acceder al estado: SET STATE
    const newTask = {task} //primero formo el objeto y luego se lo chuto al estado

    //Añadir al estado cakes el nuevo Cake
    this.setState({tasks: [...this.state.tasks, newTask]}) //aquí se está usando un Spread Operator

    event.target.task.value = "";

  }

  paintTasks = () => {
    //leer estado de tasks y pintarlos. Para ello: recorrer tasks con map
    return this.state.tasks.map((task, i)=><TodoItem data={task}  key = {i} remove={() => this.removeTask(i)} />)
  }

  removeAllTasks = () => this.setState({tasks:[]})

  resetTasks = () => this.setState({tasks:dataTasks})


  removeTask = (i) => {
    //recibe la posicion de entrada, busca en el array de datos y lo borra
    //FILTER: filtra un array, elimina el que cumpla una condición (posición i) y devuelve un nuevo array (sin ese elemento con posición i)
    const remainingTasks = this.state.tasks.filter((cake, j)=> i!== j);
    this.setState({tasks:remainingTasks});
}

  render() {
    return (<div className="div-container">
      <h1>TO DO LIST</h1>
      <form onSubmit={this.addTask} className="form">
        <label htmlFor="task">Task description:</label>
        <input type="text" name="task"id="task"/>
        <input type="submit" value="Add"/>
      </form>

      {this.paintTasks()}
      <div className="div-buttons">
      <button onClick={this.removeAllTasks}>Delete all</button>
      <button onClick={this.resetTasks}>Reset</button>
      </div>

    </div>);
  }
}


export default TodoList;
