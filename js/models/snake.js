define([], function() {
  var Snake = function() {
    var
        headPosition = [12, 12],
        size = 8,

        makeTurn = function() {

        },

        grow = function(n) {
          size += n;
        };

    return {
      grow: grow,
      makeTurn: makeTurn
    };
  };

  return Snake;
});