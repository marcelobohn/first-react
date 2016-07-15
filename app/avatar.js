var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = function (props) {
  return <img src={'https://photo.fb.com/' + props.username} />
}
var ProfileLink = function (props) {
  return (
    <a href={'https://www.fb.com/' + props.username}>
      {props.username}
    </a>
  )
}
var Avatar = function (props) {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  )
}


ReactDOM.render(
  <Avatar username="marcelobohn" />,
  document.getElementById('appAvatar')
);
