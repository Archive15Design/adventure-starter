
// FILL THIS OUT
const { Item } = require('./item');

class Food extends Item{
  constructor(name, description, heal){
    super(name, description);
    this.heal = heal;
    this.isFood = true;
  }
}

module.exports = {
  Food,
};
