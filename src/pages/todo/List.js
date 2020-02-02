import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Creators as TodoActions } from "../../store/ducks/todos"
import './styles.css';
class TodoList extends Component {

  add(event) {
    event.preventDefault();

    if(!this.input.value)
      return alert('Informe um valor');

    this.props.addTodo(this.input.value);
    this.input.value = "";
  }

  render() {
    const { todos, toogleTodo, removeTodo } = this.props;

    return (
      <div className="todo-list">
        <form className="todo-form" onSubmit={event => this.add(event)}>
          <input 
            className="todo-input" 
            placeholder="something"
            ref={ref => this.input = ref}
          />
          <button className="btn-add" type="submit">Add</button>
        </form>

        <ul>
          {todos.map(t => (
            <li key={t.id}>
              <span 
                className="li-text" 
                style={{ textDecoration: t.complete ? 'line-through': '' }}
              >
                {t.text}
              </span>
              <button className="btn-action" onClick={() => toogleTodo(t.id)}>Toogle</button>
              <button className="btn-action" onClick={() => removeTodo(t.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(TodoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);