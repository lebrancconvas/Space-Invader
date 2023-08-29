import { canvas, ctx, config } from './canvas';
import { Rectangle } from './actor';
import { keyboardAction } from './system/action';
import { keyboardPressed, keyboardReleased } from './system';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
const actor = new Rectangle(0, 0, 100, 100);
actor.draw(ctx);

// Action.
window.addEventListener('keydown', keyboardPressed);
window.addEventListener('keyup', keyboardReleased);

// Game Loop.
function update() {
  window.requestAnimationFrame(update);
  if(keyboardAction.right.pressed) {
    actor.move(1, 0);
  }
}

update();
