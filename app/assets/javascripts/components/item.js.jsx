"use strict"

var Item = React.createClass({
  toggle: function(){
    this.props.task.complete = !this.props.task.complete;
    $.ajax({
      type: 'PATCH',
      url: "/tasks/" + this.props.task.id,
      data: this.props,
      success: function(data) {
        React.render(<Tasks data={data} />, document.getElementById('tasks'));
      }
    });
  },

  render: function(){
    return <li className="list-group-item pointer" onClick={this.toggle}><input type='checkbox' checked={this.props.task.complete}></input> {this.props.task.name}</li>;
  }
});