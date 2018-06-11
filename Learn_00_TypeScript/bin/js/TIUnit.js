"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TEUnit_1 = require("./TEUnit");
var TEUnit_2 = require("./TEUnit");
var TEHero_1 = require("./TEHero");
var TEHero_2 = require("./TEHero");
var unit = new TEUnit_1.default();
unit.move(10);
unit.postion.x + unit.postion.y;
unit.postion = new TEUnit_2.Point();
var p = new TEUnit_2.Point();
p.x = 10;
var hero = new TEHero_1.default();
hero.heroType = TEHero_2.HeroType.A;
//# sourceMappingURL=TIUnit.js.map