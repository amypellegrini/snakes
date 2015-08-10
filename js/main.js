define(['./models/game-play'], function(GamePlay) {
  var
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

  var SnakesApp = {
    ui: {
      canvas: canvas,
      points: null,
      start: null,
      pause: null
    },
    context: context,
    gamePlay: new GamePlay()
  };
});
