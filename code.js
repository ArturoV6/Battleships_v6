const userSquares = document.getElementById("user-squares");
const computerSquares = document.getElementById("computer-squares");
const ships = document.querySelectorAll("#ship");

let user = []
let computer = [];

function generateBoard(container, array) {
    for (let i = 0; i < 100; i++) {
        const createDiv = document.createElement("div");
        const fragment = document.createDocumentFragment();

        fragment.appendChild(createDiv);
        container.appendChild(fragment);

        createDiv.setAttribute("id", i)
        createDiv.classList.add("create-div")

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

function generateShips(array) {
    for (let i = 0; i < 4; i++) {
        let randomStart = Math.floor(Math.random() * 100)
        console.log(randomStart) 
        for (let j = 0; j < shipsLength[i].direction[0].length; j++) {
            array[randomStart - j].classList.add("taken")
        }
    }
}

generateBoard(computerSquares, computer)
generateBoard(userSquares, user)
generateShips(computer)
const createDiv = document.querySelectorAll(".create-div");

let classList1;


ships.forEach(ship => ship.addEventListener("dragstart", (e)=>{
    classList1 = e.target.classList[0]
}))




createDiv.forEach(cell => cell.addEventListener("dragstart", dragStart))
createDiv.forEach(cell => cell.addEventListener("dragover", dragOver))
createDiv.forEach(cell => cell.addEventListener("dragenter", dragEnter))
createDiv.forEach(cell => cell.addEventListener("dragleave", dragLeave))
createDiv.forEach(cell => cell.addEventListener("drop", dragDrop))
createDiv.forEach(cell => cell.addEventListener("dragend", dragEnd))

function dragStart(e){
    e.preventDefault()
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
}

function dragLeave(e){
    e.preventDefault()
}

function dragDrop(e){
    let position;
    let cell = parseInt(e.target.id)
    if (classList1 === "destroyer")  {position = 0}
    if (classList1 === "submarine")  {position = 1}
    if (classList1 === "battleship") {position = 2}
    if (classList1 === "carrier")    {position = 3}
    console.log(position)

    for (let i = 0; i < shipsLength[position].direction[0].length; i++) {
        user[cell + i].classList.add("taken")
    } 
}

function dragEnd(e){
    console.log(e)
}