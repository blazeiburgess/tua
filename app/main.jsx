var React = require("react");
var ReactDOM = require("react-dom");
var StoriesList = require("./components/StoriesList.jsx");
var storiesStore  = require("./stores/storiesStore");


var _stories = storiesStore.getStories();

storiesStore.onChange(function (stories) {
  _stories = stories;
  render();
});

function render() {
  ReactDOM.render(<StoriesList stories={_stories} />, document.getElementById("container"));
}
render();
