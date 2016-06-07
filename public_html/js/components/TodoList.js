import React from 'react';

export default class TodoInput extends React.Component {
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
        					return <li key={todo.id}>{todo.text}</li>
        				})
        			}
        		</ul>		
        	</div>
        );
    }
}
