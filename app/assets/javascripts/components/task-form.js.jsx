"use strict";

var TaskForm = React.createClass({
  getInitialState: function(){
    return {
      task: {name: '', complete: false}
    };
  },

  handleSubmit: function(ev){
    ev.preventDefault();
    var self = this;
    $.post("/tasks", this.state, function(data) {
      React.render(<Tasks data={data} />, document.getElementById('tasks'));
      return self.setState(self.getInitialState());
    }).fail(function(){ console.log('failed post')});
  },

  handleChange: function(ev){
    this.setState({task: {name: ev.target.value, complete: false}});
  },

  render: function() {
    return  <form className="task-form" onSubmit={this.handleSubmit}>
              <label htmlFor="task-form-input"></label>
              <input id="task-form-input" placeholder="Enter New ToDo" value={this.state.task.name} onChange={this.handleChange} ></input>
              <input type="submit" value="Add Todo" />
            </form>;
  }
});