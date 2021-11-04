export declare class Draggable {
    private el;
    private isDragging;
    private readonly position;
    private readonly dragPosition;
    constructor(el: HTMLElement);
    private initPositionProperties;
    private initStyles;
    private onMouseDown;
    private onMouseUp;
    private setPosition;
    private setDragPosition;
    private onMouseMove;
}
