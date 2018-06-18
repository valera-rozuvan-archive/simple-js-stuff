$(window).ready(function () {
  var canvas,
    ctx,
    playerimage,
    x,
    y,
    player_steps = 10, // steps for the player to move by
    width = 10, // width of the player
    height = 10; // height of the player

  init();

  function init() {
    canvas = $("#my_canvas");
    ctx = canvas[0].getContext('2d');
    x = canvas.width() / 2;
    y = canvas.height() / 2;

    window.addEventListener("keydown", update, false);
    render();
  }

  function update(event) {
    clear();

    if (event.key == 'ArrowLeft') {
      x -= player_steps; //going left
    }
    if (event.key == 'ArrowRight') {
      x += player_steps; //going right
    }

    render();
  }

  function clear() {
    ctx.clearRect(x, y, width, height);
  }

  function render() {
    ctx.fillRect(x, y, width, height);
  }
});
