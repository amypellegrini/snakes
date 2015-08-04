(function() {
  var
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

  var Food = function() {
    var x,
        y;

    return {
      x: x,
      y: y
    }
  };

  var Snake = function() {
    var
        headPosition = [12, 12],
        size: 8,

        makeTurn = function() {

        },

        grow = function(n) {
          // Grow snake pixels size by n pixels,
        };

    return {
      grow: grow,
      makeTurn: makeTurn
    };
  };

  var GamePlay = function() {
    var
        start = function() {},
        pause = function() {};

    return {
      start: start,
      pause: pause
    }
  };

}());
