import {
  add as addValues,
  multiply as multiplyValues,
  subtract,
  square
} from "./math.js";

function add(...args) {
  return args.reduce((acc, cur) => cur + acc);
}

function multiply(...args) {
  return args.reduce((acc, cur) => cur * acc);
}