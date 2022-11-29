let xyNum = 16;
let activeColor = 'black';
let mouseDown = false;


const board = document.querySelector('.board');
const field = document.createElement('div');
field.classList.add('field');
const btBoard = document.querySelector('.boardSize');
btBoard.addEventListener('click', setBoardSize);


initBoard();




function initBoard()     {
    board.setAttribute('style', setRowCol(xyNum));
    fillBoard(board);
    let allFields = document.querySelectorAll('.field');

allFields.forEach(
    function(singleField) {
        singleField.style.removeProperty('background-color');
        singleField.addEventListener("mouseover", changeBgColor)
    });

}
function setRowCol(num) {
    let cssText = 'grid-template-columns: repeat(' + xyNum + ', 1fr); grid-template-rows: repeat(' + xyNum + ', 1fr)';
    return cssText;
};

function fillBoard (boardDiv){
    for (let i = 0; i < (xyNum * xyNum); i++) {
        boardDiv.appendChild(field.cloneNode(true));
    }
};

function changeBgColor(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = activeColor;
    };

    e.stopPropagation();
};

function setBoardSize() {
    validEntry = false;
    inputNum = 0;
    while(validEntry == false) {
        inputNum = Number(prompt('How many fields should the board have? (1 - 100)'));
        if (inputNum > 0 && inputNum <= 100) {
        xyNum = inputNum;
        initBoard();
        validEntry = true;
    }
    }
    delete validEntry, inputNum;

}

document.onmousedown = function() {
    mouseDown = true;
}
document.onmouseup = function() {
    mouseDown = false;
}