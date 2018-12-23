export default class BarnsleyFern {

  private _canvas: any;
  private _context: any;

  private _previousTime: number;
  private _fps: number;

  constructor(canvasSelector: string) {
    this._canvas = document.querySelector(canvasSelector);
    this._context = this._canvas.getContext('2d');
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    this._canvas.focus();
    
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
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    let ctx = this._context;
    ctx.save();

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = `16px Arial`;

    ctx.fillText(`Hello World!`, ctx.canvas.width / 2 , ctx.canvas.height / 2);

    ctx.restore();

  }

  update(elapsedTime: number) {
    
  }
}