import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';


class Layout extends React.Component {
    render() {
        const layoutPageStyle = {
            padding: 15
        };

        return (
            <div style={layoutPageStyle}>
        		<Header />
        		<TodoInput dispatch={this.props.dispatch}/>
        		<TodoList  todos={this.props.todos}/>
        		<Footer />
        	</div>
        );
    }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(Layout)
