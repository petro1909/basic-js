const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;

  },
  removeLink(position) {
    if(isNaN(position) || position < 1 || position > this.arr.length - 1) {
      this.arr.splice(0, this.arr.length);
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr.splice(0, this.arr.length);
    return result;
  }
};

module.exports = {
  chainMaker
};
