define([], function() {  
  var GamePlay = function() {
    var
        start = function() {},
        pause = function() {};

    return {
      start: start,
      pause: pause
    }
  };

  return GamePlay;
});
