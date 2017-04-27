"use strict";

var Square = require('../lib/square.js');
let Shape = require('@ull-alejandro-raul-35l2/ull-shape');
require("should");

describe("getArea", function() {
  
  it("must compute the square shape area correctly", function(){
		let a = new Shape ({ width: 100 }, 'Square');
		let s = a.getArea();
		s.should.equal(10000);
	});
	
  it("must compute the square area correctly. Square object", function() {
    let a = new Square({ width: 100});
    let s = a.getArea();
    s.should.equal(10000);
  })
});
