var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div> Hello from Main!
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
});

Main.propTypes = {
  children: React.PropTypes.node
};

module.exports = Main;
