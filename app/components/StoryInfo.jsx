var React = require("react");

module.exports = React.createClass({
  render: function () {
    return(
      <div>
      { this.props.info.name }
      { this.props.info.tagline }
      </div>
    )
  }
});
