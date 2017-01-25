import React from 'react';
import './App.css';
import ToDoList from './todoList';

const App = React.createClass({
  getInitialState: function() {
    return {
      toDos: ['Get groceries', 'Finish WDI'],
      newItem: ''
    };
  },
  clear: function() {
    this.setState({toDos: []});
  },
  newItemChange: function(e) {
    this.setState({newItem: e.target.value});
  },
  addItem: function(e) {
    e.preventDefault();
    const toDos = this.state.toDos;
    toDos.push(this.state.newItem);
    this.setState({toDos: toDos, newItem: ''});
  },
  removeItem: function(index) {
    const toDos = this.state.toDos;
    toDos.splice(index, 1);
    this.setState({toDos: toDos});
  },
	render: function() {
		return (
		  <div className="well">
		    <h1>To Do List</h1>

		    <form onSubmit={e => this.addItem(e)}>
		      <input type="text"
		       placeholder="Item goes here"
		       onChange={e => this.newItemChange(e)}
		       value={this.state.newItem}
		      />
		    </form>
        <br></br>
        <button onClick={e => this.clear()}>Clear</button>
		    <ToDoList items={this.state.toDos} removeItem={this.removeItem}></ToDoList>
		  </div>
		);
  }
});

export default App;
