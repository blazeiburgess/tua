var dispatcher = require("../dispatcher");
module.exports = {
  addStory: function (story) {
    dispatcher.dispatch({ story: story, type: "story:addStory"});
  },
  deleteStory: function (story) {
    dispatcher.dispatch({story: story, type: "story:deleteStory"});
  }
}
