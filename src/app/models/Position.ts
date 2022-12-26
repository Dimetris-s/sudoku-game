interface PositionOptions {
  x: number;
  y: number;
  xMax?: number;
  yMax?: number;
  max?: number;
}

export class Position {
  private readonly _x: number;
  private readonly _y: number;
  private readonly xMax?: number;
  private readonly yMax?: number;

  constructor({ x, y, yMax, xMax, max }: PositionOptions) {
    this._y = y;
    this._x = x;
    this.xMax = xMax || max;
    this.yMax = yMax || max;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  public top(): Position {
    const y = this._y === 0 ? this._y : this._y - 1;
    return new Position({ x: this._x, y, yMax: this.yMax, xMax: this.xMax });
  }

  public bottom(): Position {
    let y = this._y + 1;
    if(this.yMax && y > this.yMax) y = this.yMax;
    return new Position({ x: this._x, y, yMax: this.yMax, xMax: this.xMax });
  }

  public left(): Position {
    const x = this._x === 0 ? this._x : this._x - 1;
    return new Position({ x, y: this._y, yMax: this.yMax, xMax: this.xMax });
  }

  public right(): Position {
    let x = this._x + 1;
    if(this.xMax && x > this.xMax) x = this.xMax;
    return new Position({ x, y: this._y, yMax: this.yMax, xMax: this.xMax });
  }

}
