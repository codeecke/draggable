import { SortBox } from "./SortBox";
document.querySelectorAll('.sort-box').forEach(function (item) { return new SortBox(item); });
// document.querySelectorAll('.sortable-image').forEach((item: Element) => new SortableImage(item as HTMLElement));
