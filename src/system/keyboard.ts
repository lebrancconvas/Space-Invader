import { keyboardAction } from './action';

export const keyboardPressed = (event: KeyboardEvent) => {
  switch(event.code) {
    case 'ArrowUp':
      keyboardAction.up.pressed = true;
      break;
    case 'ArrowDown':
      keyboardAction.down.pressed = true;
      break;
    case 'ArrowLeft':
      keyboardAction.left.pressed = true;
      break;
    case 'ArrowRight':
      keyboardAction.right.pressed = true;
      break;
  }
};

export const keyboardReleased = (event: KeyboardEvent) => {
  switch(event.code) {
    case 'ArrowUp':
      keyboardAction.up.pressed = false;
      break;
    case 'ArrowDown':
      keyboardAction.down.pressed = false;
      break;
    case 'ArrowLeft':
      keyboardAction.left.pressed = false;
      break;
    case 'ArrowRight':
      keyboardAction.right.pressed = false;
      break;
  }
};
