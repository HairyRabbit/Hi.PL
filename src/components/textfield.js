import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import {} from './textfield.css'


export default class TextField extends Component {
    constructor() {
	super()
	this.state = { val: "", mem: [] }
    }
    clearValue() {
	this.setState({
	    val: ""
	})
    }
    changeValue(evt) {
	this.setState({
	    val: evt.target.value
	})
    }
    enterKeyDown(evt) {
	let value = evt.target.value
	
	if(evt.keyCode === 13 && !!value)
	    
	    this.setState({
		mem: this.state.mem.concat(value)
	    }, () => {
		if(this.props.onKeyDownHandle)
		    this.props.onKeyDownHandle(value)
		
		this.clearValue()
	    })
	
	if(evt.keyCode === 9 && !!value) {
	    evt.preventDefault()
	    let filterValue = this.filterMems(value)

	    if(filterValue)
		this.setState({
		    val: filterValue
		})
	}
    }
    filterMems(value) {
	let re = new RegExp(`^(${this.state.val}).+`)
	
	return this.state.mem.find(
	    n => re.test(n)
	)
    }
    render() {
	let btnClass = "btn-close" + (this.state.val ? ' show' : '')
	let memStr = this.state.val ? this.filterMems(this.state.val) || '' : ''
	
	return (
	    <section className="tf">
		<input type="text" className="tf-in" value={this.state.val} onChange={this.changeValue.bind(this)} onKeyDown={this.enterKeyDown.bind(this)} placeholder="随便输点什么" />
		<div className="tf-mem">{memStr}</div>
		<button type="button" className={btnClass} tabIndex="-1" onClick={this.clearValue.bind(this)}>+</button>
	    </section>
	)
    }
}
