var React = require("react");
var StoryInfo = require("./StoryInfo.jsx");

module.exports = React.createClass({
  render: function () {
    return(
      <div>
	// addStory functionality will go here
	{this.props.stories.map(function (s, index) {return (s.name)}) }
      </div>
    )
  }
});
