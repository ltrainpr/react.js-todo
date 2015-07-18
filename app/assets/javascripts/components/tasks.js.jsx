(function(){
  "use strict";

  var List = React.createClass({
    renderItems: function() {
      return _.map(this.props.tasks, function(task) {
        return <li className="list-group-item pointer" >{task.name}</li>;
      });
    },

    render: function() {
      return  <ul className="list-group">
                {this.renderItems()}
              </ul>;
      }
  });

  var Tasks = React.createClass({


    renderList: function(complete){
      return <List tasks={_.filter(this.props.data, function(x) { return x.complete === complete; })} />;
    },

    render: function() {
      return  <div className="todos">
                <div className="incomplete-todo">
                  <h1>Todo List</h1>
                  <h2 className="spacing-bottom">Incomplete</h2>
                  {this.renderList(false)}
                </div>
                <div className="complete-todo">
                  <h2 className="spacing-bottom">Complete</h2>
                  {this.renderList(true)}
                </div>
              </div>
    }
  });
})();