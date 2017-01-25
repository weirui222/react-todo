import React from 'react';

const ListItem = React.createClass({
  render: function() {
    return <li>
      {this.props.item}
      <span>
        <button onClick={e => this.props.removeItem(this.props.index)}>
          Remove
        </button>
      </span>
    </li>;
  }
});

export default ListItem;
