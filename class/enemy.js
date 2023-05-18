class Enemy {
    constructor(name, hits, damage, room){
        this.name = name;
        this.hits = hits;
        this.damage = damage;
        this.room = room;
    }

    attack(player){
        player.hp -= this.damage;
        console.log(`${this.name} hits you for ${this.damage} damage!`);
    }

    takeDamage(damage){
        this.hits -= damage;
        if (this.hits > 0){
            console.log(`You hit ${this.name} for ${damage} damage!`)
        } else {
            console.log(`You hit ${this.name} for ${damage} damage, destroying it!`);
            this.room.removeEnemy(this.name);
        }
    }
}

module.exports = {
    Enemy,
  }
