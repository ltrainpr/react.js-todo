
"use strict";
var TaskForm = React.createClass({
  render: function(){
    return  <div className="task-form">
              <label htmlFor="task-form-input"></label>
              <input id="task-form-input"></input>
            </div>;
  }
});

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
    return  <div className="react-todo">
              <h1>Todo List</h1>
              <TaskForm />
              <div className="todos-list">
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

var Item = React.createClass({
  toggle: function(){
    this.props.task.complete = !this.props.task.complete;
  },

  render: function(){
    return <li className="list-group-item pointer" onClick={this.toggle}>{this.props.task.name}</li>;
  }
});