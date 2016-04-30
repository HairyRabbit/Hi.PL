import React, { Component } from 'react'
import {} from './todos-header.css'
import { Todos_Status } from './todos-type'

class TabTitle extends Component {
    render() {
	let className = `tab-title ${this.props.isActived ? 'active' : ''}`
	
	return (
	    <div className={className} onClick={this.props.clickTitleHandle}>
		{this.props.children}
	    </div>
	)
    }
}

export default class Header extends Component {
    render() {
	return (
	    <header className="header">
	      <section className="tab">
		<TabTitle isActived={this.props.tab === Todos_Status.ALL} clickTitleHandle={() => this.props.clickTitle(Todos_Status.ALL)}>所有</TabTitle>
		<TabTitle isActived={this.props.tab === Todos_Status.COMPLETED} clickTitleHandle={() => this.props.clickTitle(Todos_Status.COMPLETED)}>未完成</TabTitle>
		<TabTitle isActived={this.props.tab === Todos_Status.ACTIVED} clickTitleHandle={() => this.props.clickTitle(Todos_Status.ACTIVED)}>已完成</TabTitle>
	      </section>
	    </header>
	)
    }
}
