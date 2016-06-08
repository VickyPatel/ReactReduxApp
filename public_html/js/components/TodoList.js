import React from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    render() {
        const listStyle = {
            padding: 15,
            color: 'green',
            fontSize: 20
        }
        return (
            <div class="row" style={listStyle}>
        		<ul>
        			{
        				this.props.todos.map((todo) => {
        					return <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
        				})
        			}
        		</ul>		
        	</div>
        );
    }
}
