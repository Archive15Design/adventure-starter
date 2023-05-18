class Room {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.exits = {};
        this.items = [];
        this.enemies = [];
    }

    printRoom() {
        console.clear();
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.items.length > 0) {
            console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        }
        console.log(this.getExitsString());
        console.log("");
    }

    getExits() {
        return Object.keys(this.exits);
    }

    getExitsString() {
        return `Exits: ${this.getExits().join(", ")}`
    }

    connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    getRoomInDirection(direction) {
        return this.exits[direction];
    }

    getItemByName(name) {
        const item = this.items.find(item => item.name === name);
        return item;
    }

    getEnemyByName(name) {
        const enemy = this.enemies.find(enemy => enemy.name === name);
        return enemy;
    }

    removeEnemy(name){
        const enemy = this.getEnemyByName(name);
        const enemyIndex = this.enemies.indexOf(enemy);
        this.enemies.splice(enemyIndex, 1);
    }

}

module.exports = {
  Room,
};
