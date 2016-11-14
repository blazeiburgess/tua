var React = require("react");

module.exports = React.createClass({
  render: function () {
    return(
      <div>
	<h4>{ this.props.story.name }</h4>
	<p>{ this.props.story.tagline }</p>
	<br />
      </div>
    )
  }
});
