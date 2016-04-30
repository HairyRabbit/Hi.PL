import React, { Component } from 'react'
import {} from './todos-item.css'

export default class TodosItem extends Component {
    closeHandle(evt) {
	if(this.props.closeBtnClickHandle)
	    this.props.closeBtnClickHandle()
	evt.stopPropagation()
    }
    render() {
	let txtClass = `todos-item-txt ${this.props.content.isCompleted ? 'completed' : ''}`
	
        return (
	    <section className="todos-item" onClick={this.props.clickHandle}>
		
		<span className={txtClass}>
		  {this.props.content.content}
	        </span>
		
		<button type="button" className="btn-close" tabIndex="-1" onClick={this.closeHandle.bind(this)}>+</button>
		
            </section>
        )
    }
}
