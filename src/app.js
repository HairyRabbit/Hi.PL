import React, { Component } from 'react'
import {} from './app.css'
import Header from './todos-header'
import Footer from './todos-footer'
import Main from './todos-main'
import { Todos_Status } from './todos-type'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
	    tab: Todos_Status.ALL,
	    todos: []
	}
    }
    addTodo(value) {
	this.setState({
            todos: this.state.todos.concat({
		isCompleted: false,
		content: value
	    })
        })
    }
    deleteItem(idx) {
        let todos = this.state.todos
        let left = todos.slice(0, idx)
        let right = todos.slice(idx + 1)
        this.setState({
            todos: [].concat(left).concat(right)
        })
    }
    hasBeenCompleted(idx) {
	let todos = this.state.todos
        let left = todos.slice(0, idx)
        let right = todos.slice(idx + 1)
	let curr = Object.assign({}, todos[idx], {
	    isCompleted: !todos[idx].isCompleted
	})
        this.setState({
            todos: [].concat(left).concat(curr).concat(right)
        })
    }
    toggleTab(flag) {
	this.setState({
	    tab: flag
	})
    }
    render() {
	let all = (n) => n
	let completed = (n) => n.isCompleted
	let actived = (n) => !n.isCompleted
	let filter = ((tab) => {
	    switch(tab) {
	    case Todos_Status.COMPLETED:
		return completed
	    case Todos_Status.ACTIVED:
		return actived
	    default:
		return all
	    }
	})(this.state.tab)
	let todos = this.state.todos.filter(filter)
	
        return (
	  <main className="container">
	    <Header tab={this.state.tab} clickTitle={this.toggleTab.bind(this)} />
	    <Main todos={todos} textfieldEnter={this.addTodo.bind(this)} closeClick={this.deleteItem.bind(this)} itemClick={this.hasBeenCompleted.bind(this)} />
	    <Footer all={this.state.todos.length} completed={this.state.todos.filter(completed).length} actived={this.state.todos.filter(actived).length} />
          </main>
        )
    }
}
