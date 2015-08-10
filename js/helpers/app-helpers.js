define([], function() {
  var helpers = {
    random: function() {
      return Math.floor((Math.random() * 10) + 1);
    }
  };

  return helpers;
});
