let zIndex = 1;

export class Draggable {

  private isDragging: boolean = false;
  private readonly position = { left: 0, top: 0 };
  private readonly dragPosition = { x: 0, y: 0 };

  constructor(private el: HTMLElement) {
    this
      .initPositionProperties()
      .initStyles();

    el.addEventListener("mousedown", (e) => this.onMouseDown(e));
    document.addEventListener("mouseup", (e) => this.onMouseUp(e));
    document.addEventListener("mousemove", (e) => this.onMouseMove(e))
  }

  private initPositionProperties() {
    this.position.left = parseInt(window.getComputedStyle(this.el).left);
    this.position.top = parseInt(window.getComputedStyle(this.el).top);

    if (!this.position.left) this.position.left = 0;
    if (!this.position.top) this.position.top = 0;

    return this;
  }

  private initStyles() {
    if (window.getComputedStyle(this.el).position === 'static') {
      this.el.style.position = 'relative';
    }
    this.el.style.left = this.position.left + 'px';
    this.el.style.top = this.position.top + 'px';

    return this;
  }

  private onMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.setDragPosition(e);
    this.el.style.zIndex = (++zIndex).toString();
    this.isDragging = true;
  }

  private onMouseUp(e: MouseEvent) {
    e.preventDefault()
    this.isDragging = false;
  }

  private setPosition(left: number, top: number) {
    this.position.left = left;
    this.position.top = top;

    this.el.style.left = this.position.left + 'px';
    this.el.style.top = this.position.top + 'px';

    return this;
  }

  private setDragPosition(e: MouseEvent) {
    this.dragPosition.x = e.x;
    this.dragPosition.y = e.y;

    return this;
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();

    const distance = {
      x: e.x - this.dragPosition.x,
      y: e.y - this.dragPosition.y
    }

    this
      .setDragPosition(e)
      .setPosition(
        this.position.left + distance.x,
        this.position.top + distance.y
      );

  }
}
