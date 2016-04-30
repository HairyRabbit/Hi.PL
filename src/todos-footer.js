import React, { Component } from 'react'
import {} from './todos-footer.css'
import { Todos_Status } from './todos-type'

class Info extends Component {
    render() {
	return (
	  <div className="todos-info">
	    <span>{this.props.num}</span>
	    {this.props.children}
	  </div>
	)
    }
}

class Analysis extends Component {
    render() {
	return (
	  <section className="footer-left">
	    <Info num={this.props.all}>个待办事项</Info>
	    <Info num={this.props.completed}>已完成</Info>
	    <Info num={this.props.actived}>未完成</Info>
	  </section>
	)
    }
}

class Tools extends Component {
    render() {
	return (
	  <section className="footer-right">
	    <div>删除全部</div>
	  </section>
	)
    }
}

export default class Footer extends Component {
    render() {
	return (
	    <footer className="footer">
		<Analysis all={this.props.all} completed={this.props.completed} actived={this.props.actived} />
	    </footer>
	)
    }
}
