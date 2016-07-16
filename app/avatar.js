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

var Link = React.createClass({
  changeURL: function(){
    window.location.replace(this.props.href)
  },
  render: function(){
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

var ProfileLink = function (props) {
  return (
    <Link href={'https://twitter.com/' + props.user.username}>
      {props.user.name}
    </Link>
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
