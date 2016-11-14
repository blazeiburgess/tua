var dispatcher = require("../dispatcher");

function StoryStore () {
  var listeners = [];
  var stories = [
    {
      name: "First story",
      tagline: "Original. Masterpiece. Stunning brilliance"
    },
    {
      name: "Second story",
      tagline: "Garbage. Derivative. Toff"
    }
  ];

  function getStories() {
    return stories;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function addStory(story) {
    stories.push(story);
    triggerListeners();
  }

  function deleteStory(story) {
    var _index;
    stories.map(function (s, index) {
      if (s.name === story.name) {
	_index = index;
      }
    });
    stories.splice(_index, 1);
    triggerListeners();
  }

  function triggerListeners() {
    listeners.forEach(function (listener) {
      listener(stories);
    });
  }

  dispatcher.register(function (payload) {
    var split = payload.type.split(":");
    if (split[0] === "story") {
      switch (split[1]) {
        case 'addStory':
          addStory(payload.story);
          break;
        case 'deleteStory':
          deleteStory(payload.story);
          break;
        
        default:
          console.log("ERROR: unknown command");
	  break;
      }
    }
  });

  return {
    getStories: getStories,
    onChange: onChange
  }
}

module.exports = StoryStore();
