var React = require("react");
var ReactDOM = require("react-dom");
var StoryList = require("./components/StoryList.jsx");

var _stories = [
  {name: "First story", tagline: "Moving and of timeless significance"},
  {name: "Second story", tagline: "Derivative. Rehashing of previous work. Lacks vitality"}
]

function render() {
  ReactDOM.render(<StoryList stories={_stories} />, document.getElementById("container"));
}
render();
