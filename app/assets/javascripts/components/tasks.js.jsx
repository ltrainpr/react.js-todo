"use strict";

var Tasks = React.createClass({
  getInitialState: function(){
    return {
      tasks: this.props.data
    };
  },

  getDefaultProps: function(){
    return {
      tasks: []
    };
  },

  renderList: function(complete){
    return <List tasks={_.filter(this.props.data, function(x) { return x.complete === complete; })} />;
  },

  render: function() {
    return  <div className="react-todo notebook">
              <h1>Todo List</h1>
              <TaskForm />
              <div className="todos">
                <div className="incomplete-todo">
                  <h2 className="spacing-bottom">Incomplete</h2>
                  {this.renderList(false)}
                </div>
                <div className="complete-todo">
                  <h2 className="spacing-bottom">Complete</h2>
                  {this.renderList(true)}
                </div>
              </div>
            </div>;
  }
});