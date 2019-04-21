class RNG {
  constructor(arrayLength) {
    this.arrayLength = arrayLength
  }

  rand() {
    return Math.floor(Math.random() * this.arrayLength);
  }
}

module.exports = RNG;
