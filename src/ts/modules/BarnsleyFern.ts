import { map } from '../libs/p5';
import { Dot } from './Dot';

export default class BarnsleyFern {

  private _canvas: any;
  private _context: any;

  private _previousTime: number;
  private _fps: number;

  private _dots: Dot[] = [];

  private _x: number;
  private _y: number;
  private _color: string;

  private _resolution: number;

  constructor(canvasSelector: string) {
    this._canvas = document.querySelector(canvasSelector);
    this._context = this._canvas.getContext('2d');
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    this._canvas.focus();

    this._x = 0;
    this._y = 0;
    this._color = null;

    if (this._canvas.width > 1024) {
      this._resolution = 350;
    } else if (this._canvas.width > 600 && this._canvas.width <= 1024) {
      this._resolution = 250;
    } else {
      this._resolution = 150;
    }

    window.requestAnimationFrame(this.frame.bind(this));
  }

  frame(timestamp: number) {
    if (!this._previousTime) {
      this._previousTime = timestamp;
    }
    let elapsedTime = timestamp - this._previousTime;
    this._previousTime = timestamp;
    this._fps = 1000 / elapsedTime;

    this.update(elapsedTime / 1000);
    this.draw();

    window.requestAnimationFrame(this.frame.bind(this));
  }

  draw() {
  }

  update(elapsedTime: number) {
    for (let i = 0; i < 500; i++) {
      let px = map(this._x, -this._canvas.width / this._resolution, this._canvas.width / this._resolution, 0, this._canvas.width);
      let py = map(this._y, 0, 10, this._canvas.height, 0);
      this.addDot(px, py);

      this.nextPoint();
    }

  }

  addDot(x: number, y: number) {
    let dot = new Dot(this._context, x, y, 0.05, this._color);
    this._dots.push(dot);
    
    dot.draw();
  }

  nextPoint() {
    let randNum = Math.random();

    let nextX: number;
    let nextY: number;

    if (randNum < 0.03) {

      nextX = 0;
      nextY = 0.16 * this._y;

    } else if (randNum < 0.86) {

      nextX = 0.85 * this._x + 0.04 * this._y;
      nextY = -0.04 * this._x + 0.85 * this._y + 1.6;

    } else if (randNum < 0.93) {

      nextX = 0.2 * this._x - 0.26 * this._y;
      nextY = 0.23 * this._x + 0.22 * this._y + 1.6;

    } else {

      nextX = -0.15 * this._x + 0.28 * this._y;
      nextY = 0.26 * this._x + 0.24 * this._y + 0.44;
      
    }

    this._x = nextX;
    this._y = nextY;
  }
}