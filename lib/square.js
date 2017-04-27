"use strict";
let Shape = require('@ull-alejandro-raul-35l2/ull-shape');
class Square extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return  Math.pow(this.width,2) 
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;
