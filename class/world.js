const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');
const { Enemy } = require('./enemy');

class World {
    constructor() {
        this.rooms = {};
    }

    loadWorld(worldData) {

        const roomList = worldData.rooms;
        const itemList = worldData.items;
        const enemyList = worldData.enemies;

        // Instantiate new room objects
        // Get name, id and description from room data
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomData = roomList[i];
            let newRoom = new Room(roomData.name, roomData.description);

            this.rooms[roomData.id] = newRoom;
        }

        // Connect rooms by ID
        // Note that all rooms must be created before they can be connected
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomID = roomList[i].id;
            let roomConnections = roomList[i].exits;

            for (const direction in roomConnections) {
                let connectedRoomID = roomConnections[direction];
                let roomToConnect = this.rooms[connectedRoomID];
                this.rooms[roomID].connectRooms(direction, roomToConnect);
            }

        }

        // Instantiate items
        for (let i = 0 ; i < itemList.length ; i++) {

            let itemData = itemList[i];
            let newItem;

            if (itemData.isFood) {
                newItem = new Food(itemData.name, itemData.description);
            } else {
                newItem = new Item(itemData.name, itemData.description);
            }

            let itemRoom = this.rooms[itemData.room];
            itemRoom.items.push(newItem);
       }
       // instantiate enemies
       for (const enemy of enemyList){
        let newEnemy;
        let enemyRoom = this.rooms[enemy.room];

        newEnemy = new Enemy(enemy.name, enemy.hits, enemy.damage, enemyRoom);

        enemyRoom.enemies.push(newEnemy)
       }

    }
}

module.exports = {
  World,
};
