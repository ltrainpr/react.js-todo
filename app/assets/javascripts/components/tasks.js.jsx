"use strict";


var Tasks = React.createClass({
  renderList: function(complete){
    console.log(_.filter(this.props.data, function(x) { return x.complete === complete; }));
    return <ul className="list-group"></ul>
  },

  render: function() {
    return  <div className="col-md-6">
              <h1>Todo List</h1>
              <h2 className="spacing-bottom">Incomplete</h2>
              {this.renderList(false)}
            </div>;
  }
});

$(document).ready(function () {
  React.render(<Tasks data={this.props.data} />, document.getElementById('tasks'));
})