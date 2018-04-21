import React, {Component} from 'react';
import { uniqueId } from '../../util/id_generator'

class TodoForm extends Component {

  constructor(props){
    super(props);

    this.state = {title:'', body:'', done: false};
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, {id: uniqueId()}, this.state);
    this.setState({
      title: '',
      body: ''
    });
    this.props.receiveTodo(todo);
  }

  onInputChange(property) {
    return event => this.setState({[property]: event.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Title:
            <input
              placeholder = {this.state.title}
              value={this.state.title}
              onChange={this.onInputChange('title')}
            />
          </label>
          <label>Body:
            <textarea
              placeholder = {this.state.body}
              value={this.state.body}
              onChange={this.onInputChange('body')}
            />
          </label>
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    );
  }
};

export default TodoForm;
