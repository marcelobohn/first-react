var USER_DATA = {
  name: 'Marcelo Bohn',
  username: 'marcelobohn',
  image: '697053728180985856/Ox4uXGHh_400x400.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = function (props) {
  return <img src={'https://pbs.twimg.com/profile_images/' + props.image} />
}
var ProfileLink = function (props) {
  return (
    <a href={'https://twitter.com/' + props.user.username}>
      {props.user.name}
    </a>
  )
}
var Avatar = function (props) {
  return (
    <div>
      <ProfilePic image={props.user.image} />
      <ProfileLink user={props.user} />
    </div>
  )
}


ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('appAvatar')
);
