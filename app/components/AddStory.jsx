var React = require("react");
var actions = require("../actions/StoryActions");

module.exports = React.createClass({
  getInitialState: function () {
    return {
      name: "",
      tagline: ""
    }
  },
  addStory: function (e) {
    e.preventDefault();
    actions.addStory(this.state);
  },
  handleInputChange: function (e) {
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  },
  render: function () {
    return(
      <form className="form" onSubmit={this.addStory}>
	<label for="">Story Name:</label>
	<input type="text" name="name" />
	<br />
	<label for="">Tagline:</label>
	<input type="text" name="tagline" />
	<br />
	<input type="submit" value="Add Story" />
	
      </form>
    )
  }
})
