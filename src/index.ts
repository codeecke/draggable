import { Draggable } from "./Draggable";

document.querySelectorAll('.draggable').forEach((item: Element) => new Draggable(item as HTMLElement));

