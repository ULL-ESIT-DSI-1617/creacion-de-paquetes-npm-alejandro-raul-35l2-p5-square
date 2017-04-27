"use strict";

let Shape = require('@ull-alejandro-raul-35l2/ull-shape');

/**
 * Paquete npm de Square
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-alejandro-raul-35l2-p5-square
 * 
 * Autores: Alejandro Díaz Cueca y Raúl Martín Morales
 * 
 * 
 * Team: alejandro-raul-35l2
 * 
 * Aquí creamos la clase Square que hereda de Shape que representa las figuras cuadradas
 * 
 * @class Square
 * @param {hash} options Lado
 * 
 */
 

class Square extends Shape {
    constructor(options) {
      super(options)
    }
    /**
     * @function area
     * @return {value} retorna el valor del area de Square
     */
    area() {
      return  Math.pow(this.width,2) 
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;
