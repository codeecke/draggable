import { Draggable } from "./Draggable";
import { RandomRotation } from "./RandomRotation";

window.addEventListener('load', () => {

  document.querySelectorAll('.draggable').forEach((item: Element) => new Draggable(item as HTMLElement));
  document.querySelectorAll('.random-rotation').forEach((item: Element) => new RandomRotation(item as HTMLElement));
})

