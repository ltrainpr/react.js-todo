"use strict"

var List = React.createClass({
  renderItems: function() {
    return _.map(this.props.tasks, function(task) {
      return <Item task={task} />
    });
  },

  render: function() {
    return  <ul className="list-group">
              {this.renderItems()}
            </ul>;
    }
});