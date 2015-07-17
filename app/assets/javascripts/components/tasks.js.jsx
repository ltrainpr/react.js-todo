var Tasks = React.createClass({
  getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({ counter: this.state.counter+1 });
    },

    render: function() {
        return <div>
            <div>{this.state.counter}</div>
            <button onClick={this.increment}>Increment!</button>
        </div>;
    }
});

$(document).ready(function(){
  React.render(React.createElement(Tasks), document.getElementById('tasks'));
})