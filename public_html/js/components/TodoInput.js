import React from 'react';

import actions from '../actions/TodoActions';

export default class TodoInput extends React.Component {

	constructor(props, context){
		super(props, context);
		this.state = {
			inputText : ""
		}
	}

	handleChange(event){
		this.setState({
			inputText : event.target.value
		})
	}

	handleAddTodo(event){
		event.preventDefault();
		console.log('Submit clicked');
		this.props.dispatch(actions.addTodo(this.state.inputText));
	}

    render() {
        return (
        	<div class="row">
        		<div class="col-lg-8 col-xs-8">
	        		<input 
	        			type="text"
	        			class="form-control"
	        			placeholder="Enter todo"
	        			value={this.state.inputText}
	        			onChange={this.handleChange.bind(this)}/>
	        	</div>
	        	<div class="col-lg-4 col-xs-4">
		        	<button 
	        			class="btn btn-success"
	        			onClick={this.handleAddTodo.bind(this)}>Submit</button>
	        	</div>        		
        	</div>
        );
    }
}
