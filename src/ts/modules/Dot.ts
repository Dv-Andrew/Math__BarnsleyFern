import { map } from '../libs/p5';

export class Dot {

  private _position = {
    x: 0,
    y: 0
  };
  private _radius: number;
  private _color: string;

  constructor(
    private _context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number,
    radius: number,
    color?: string
  ) {

    this._position.x = positionX;
    this._position.y = positionY;

    this._radius = radius;
    this._color = color || `hsl(${map(this._position.y, _context.canvas.height, 0, 0, 360)}, 100%, 50%)`;

  }

  draw() {
    let ctx = this._context;
    ctx.save();
    ctx.translate(this._position.x, this._position.y);

    ctx.fillStyle = this._color;

    ctx.beginPath();
    ctx.arc(0, 0, this._radius, 0, Math.PI * 2);
    ctx.closePath();

    ctx.fill();

    ctx.restore();
  }

  update(elapsedTime: number) {
  }

  getPosition() {
    return this._position;
  }
}