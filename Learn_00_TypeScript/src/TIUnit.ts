import Unit from "./TEUnit";
import {Point} from "./TEUnit";
import Hero from "./TEHero";
import {HeroType} from "./TEHero";



let unit:Unit = new Unit();
unit.move(10);

unit.postion.x + unit.postion.y;

unit.postion = new Point();

let p = new Point();
p.x = 10;

let hero:Hero = new Hero();
hero.heroType = HeroType.A;