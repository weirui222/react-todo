import React from 'react';
import ListItem from './listItem';

const ToDoList = React.createClass({
  render: function() {
    let index = -1;
    const todoItems = this.props.items.map(item => {
      index++;
      return <ListItem key={index} item={item} removeItem={this.props.removeItem} index={index}></ListItem>
    });

    return (
      <ul>{todoItems}</ul>
    );
  }
});

export default ToDoList;
