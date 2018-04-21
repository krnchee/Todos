
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Root from './components/root'


import { receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
import allTodos from './reducers/selectors';

window.store = store;

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;


document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Root store={store}/>, document.getElementById("main")
	);
});
