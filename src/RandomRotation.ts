export class RandomRotation {
  constructor(el: HTMLElement) {

    el.style.transform = window.getComputedStyle(el).transform + ` rotate(${Math.round(Math.random() * 50 -25)}deg)`
  }
}