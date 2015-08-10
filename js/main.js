define(['./models/game-play'], function(GamePlay) {
  var SnakesApp = function() {
    var
        ui = {
          canvas: null,
          points: null,
          start: null,
          pause: null
        },
        context = null,

        setUI = function() {
          ui.canvas = document.getElementById('canvas');
          ui.start = document.getElementById('start-button');
        },

        setContext = function() {
          context = ui.canvas.getContext('2d');
        },

        bindEvents = function() {

        },

        init = function() {
          setUI();
          setContext();
          bindEvents();
        };

    return {
      ui: ui,
      context: context,
      gamePlay: new GamePlay()
    };
  };
});