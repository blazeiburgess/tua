var React = require("react");
var StoryInfo = require("./StoryInfo.jsx");
var AddStory = require("./AddStory.jsx");

module.exports = React.createClass({
  render: function () {
    return(
      <div>	
	{this.props.stories.map(function (s, index) {return(<StoryInfo story={s} />) }) }
	<AddStory />
      </div>
    )
  }
});
