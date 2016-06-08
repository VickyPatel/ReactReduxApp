import React from 'react';

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
		this.props.addTodo(this.state.inputText);
		this.state.inputText = "";
	}

    render() {
        return (
        	<form onSubmit={this.handleAddTodo.bind(this)} >
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
			        	<input 
			        		type="submit"
		        			class="btn btn-warning"
		        			text="Submit"/>
		        	</div> 
		        </div>
		    </form>       		
        );
    }
}
