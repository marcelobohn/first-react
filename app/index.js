var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div> Hello React Program </div>
    )
  }
});
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)

var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});
ReactDOM.render(
  <HelloUser name="Marcelo"/>, 
  document.getElementById('appUser')
);
