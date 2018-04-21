import React, {Component} from 'react';
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {detail: false};
    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo(event) {
    event.preventDefault();
    const updateTodo = merge({},
      this.props.todoProps,
      {done: !(this.props.todoProps.done)})
    this.props.receiveTodo(updateTodo);
  }

  toggleDetail(event) {
    event.preventDefault();
    this.setState({detail: !(this.state.detail)});
  }

  deleteTodo(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todoProps)
  }


  render() {
    const todo = this.props.todoProps;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo} />
    }
    else {detail = ''}
    return(
      <div>
        <li onClick={this.toggleDetail}>{todo.title}</li>
        <button
         onClick={this.toggleTodo}>{todo.done ? 'done' : 'undo'}</button>
         {detail}
        <button
         onClick={this.deleteTodo}>Delete Todo!</button>
      </div>
    )
  }
};

export default TodoListItem;
