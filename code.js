const userSquares = document.getElementById("user-squares");
const computerSquares = document.getElementById("computer-squares");

let user = []
let computer = [];

function generateBoard(container, array) {
    for (let i = 0; i < 100; i++) {
        const createDiv = document.createElement("div");
        const fragment = document.createDocumentFragment();

        fragment.appendChild(createDiv);
        container.appendChild(fragment);

        createDiv.dataset.id = i;

        array.push(createDiv)
    }
}

const shipsLength = [
    {
        direction: [
            [0, 1],
            [0, 10]
        ]
    },
    {
        direction: [
            [0, 1, 2],
            [0, 10, 20]
        ] 
    },
    {
        direction: [
            [0, 1, 2, 3],
            [0, 10, 20, 30]
        ]
    },
    {
        direction: [
            [0, 1, 2, 3, 4],
            [0, 10, 20, 30, 40]
        ]
    }
]

console.log(user)

function generateShips() {
    let randomNumber = Math.floor(Math.random()*shipsLength.length)
    let direction = Math.floor(Math.random()*shipsLength[0].direction.length)
    let randomStart = Math.floor(Math.random()*100)
        for (let i = 0; i < shipsLength[randomNumber].direction[direction].length; i++) {
            console.log(user[randomStart - i].classList.add("destroyer"))
    }
}

generateBoard(userSquares, user)
generateBoard(computerSquares, computer)
generateShips()