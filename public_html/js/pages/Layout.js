import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import actions from '../actions/TodoActions';

class Layout extends React.Component {
    render() {
        const layoutPageStyle = {
            padding: 15
        };

        return (
            <div style={layoutPageStyle}>
        		<Header />
        		<TodoInput addTodo={this.props.actions.addTodo}/>
        		<TodoList  actions={this.props.actions} todos={this.props.todos}/>
        		<Footer />
        	</div>
        );
    }
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
