class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
        this.hp = 5;
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        const item = this.currentRoom.getItemByName(itemName);
        this.items.push(item);
        const itemIndex = this.currentRoom.items.indexOf(item);
        this.currentRoom.items.splice(itemIndex, 1);
        console.log(`You picked up ${itemName} from the ${this.currentRoom.name}.`)
    }

    dropItem(itemName) {
        const item = this.getItemByName(itemName);
        this.currentRoom.items.push(item);
        const itemIndex = this.items.indexOf(item);
        this.items.splice(itemIndex, 1);
        console.log(`You dropped ${itemName} in ${this.currentRoom.name}.`);
    }

    eatItem(itemName) {
        const item = this.getItemByName(itemName);
        const itemIndex = this.items.indexOf(itemName);

        if (item.isFood){
            this.hp += item.heal;
            this.items.splice(itemIndex, 1);
            console.log(`You eat a ${itemName}, healing ${item.heal} points of damage.`);
        } else {
            console.log('You can only eat food...');
        }
    }

    getItemByName(name) {
        const item = this.items.find(item => item.name === name);
        return item;
    }

    attack(enemyName){
        let enemy = this.currentRoom.getEnemyByName(enemyName);
        enemy.takeDamage(1);
    }

    getHealth(){
        console.log(`You have ${this.hp} health left.`);
    }
}

module.exports = {
  Player,
};
