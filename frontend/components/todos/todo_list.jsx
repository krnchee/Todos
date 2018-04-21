import React, {Component} from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends Component {

  render() {
    const todoItems = this.props.todos.map(todo => <TodoListItem todoProps={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />)
    return(
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    )
  }
}

export default TodoList;
