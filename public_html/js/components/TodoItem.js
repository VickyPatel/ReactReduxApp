import React from 'react';

class TodoItem extends React.Component {

    handleComplete(){
        this.props.actions.completeTodo(this.props.todo.id);
    }

    handleDelete(event){
        event.preventDefault();
        console.log(this.props);
        this.props.actions.deleteTodo(this.props.todo.id);
    }

    render() {
        const listStyle = {
            display:'block',
            paddingTop: 10
        };
        const item = this.props.todo.text;

        return (
            <li class="row completedListItem" style={listStyle}>
                <div class="col-lg-5 col-xs-5">{item}</div>
                <button class="col-lg-3 col-xs-3" onClick={this.handleComplete.bind(this)}>Mark as completed</button>
                <button class="col-lg-2 col-xs-2" onClick={this.handleDelete.bind(this)}>Delete</button>
            </li>

        );
    }
}

export default TodoItem;