import React, { Component } from 'react';
import './styles.css'

export default class TodoList extends Component {

  state = {

  }

  input = {};

  todos = [
    { id: 1, name: 'test 1' },
    { id: 2, name: 'test 2' },
  ]
  
  add() {
    // console.log(this.input)
    // this.props.addTodo(this.input.value);
    // this.input.value = "";
  }

  render() {
    return (
      <div className="todo-list">
        <form>
          <input className="todo-input" type="text" placeholder="something" />
          <button className="btn-add" type="button" onClick={() => this.add()}>Add</button>
        </form>

        <ul>
          {this.todos.map(t => (
            <li key={t.id} style={{ listStyle: 'none' }}>
              <span className="li-text">{t.name}</span>
              <button className="btn-action">Toogle</button>
              <button className="btn-action">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}