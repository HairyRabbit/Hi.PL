import React, { Component } from 'react'
import {} from './todos-main.css'
import TextField from './components/textfield'
import TodosItem from './todos-item'
import { Todos_Status } from './todos-type'


export default class Main extends Component {
    render() {
	return (
	  <section className="body">
	    <TextField onKeyDownHandle={this.props.textfieldEnter} />
            <ul className="todos">
	    {
	      this.props.todos.map(
                (n, idx) =>
		  <li key={`todosItem-${idx}`}>
	 	    <TodosItem content={n} closeBtnClickHandle={() => this.props.closeClick(idx)} clickHandle={() => this.props.itemClick(idx)}  />
		  </li>
                ).reverse()
	    }
            </ul>
	  </section>
	)
    }
}
