let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true // player X, player 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

// Reset The Game
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){ // Player O
            box.innerText = "O";
            turn0 = false;
        }else{ // Player X
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// Disable Boxes
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

// Enable Boxes
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Making function for checking the winner
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

