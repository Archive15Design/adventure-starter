module.exports = {
    rooms: [
        {
            id: 1,
            name: "Entrance",
            description:
            "You descend the stair and breathe in the damp, earthy smell of mold and decay. To the north and east are two doors, slightly ajar. A burning oil lamp hangs from the ceiling, its light making the shadows undulate and shift. You see small black and violet butterflies flittering around the room.",
            exits: {n: 2, e: 3}
        },
        {
            id: 2,
            name: "Dining hall",
            description: "You enter a warm and well-lit dining hall. There is a stench of rot here. From the north you hear soft music, a sorrowful violin is playing. A long table surrounded by chairs dominate the room, at the head of it a grey, bearded man is sitting.",
            exits: {n: 6, s: 1}
        },
        {
            id: 3,
            name: "Library / Sleeping quarters",
            description: "Cool air hits you as you walk into the room, it smells of smoke. The room is torch-lit and contains two beds in which three skeletons rest.",
            exits: {s: 1, n: 4}
        },
        {
            id: 4,
            name: "Guard Room",
            description: "The room is warm, almost sweltering. A crackling fire burns in the fireplace Two guards with pudgy faces and crooked backs look up as you enter.",
            exits: {s: 3, w: 5}
        },
        {
            id: 5,
            name: "Cells",
            description: "You enter a prison cell. The people within the cells are starved and driven mad. They lunge at you in an attempt to strangle the life out of you. The room is dark and stinks of human filth.",
            exits: {e: 4, w: 6}
        },
        {
            id: 6,
            name: "Corridor",
            description: "The corridor is cool and dark. You see a light at the end of it and a door to the right. The violin music is stronger here.",
            exits: {s: 2, e: 5}
        }
    ],
    items: [
        {
            name: "rock",
            description: "Just a simple rock",
            room: 1
        },
        {
            name: "sandwich",
            description: "A tasty looking sandwich",
            room: 2,
            isFood: true
        },
        {
            name: "butterfly",
            description: "A black and violet butterfly",
            heal: 5,
            room: 1,
            isFood: true,
        },
        {
            name: "tome",
            description: "A fragile, dust-covered tome",
            room: 3,
        },
        {
            name: "bone",
            description: "Thigh bone from a dog with meat scraps on it",
            heal: 1,
            room: 4,
            isFood: true,
        },
    ],
    enemies: [
        {
            name: "guard1",
            hits: 1,
            damage: 1,
            room: 4,
        },
        {
            name: "guard2",
            hits: 1,
            damage: 1,
            room: 4,
        }
    ]
}
