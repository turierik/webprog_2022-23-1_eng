const table = document.querySelector("table")
const winnerSpan = document.querySelector("span")
let player = "X"
let board = [[], [], []]
let won = false

function handleTdClick(){
    if (this.innerText === "" && !won){
        this.innerText = player;
        let row = this.parentElement.rowIndex;
        let col = this.cellIndex;
        board[row][col] = player;
        won = decideWinner(player, row, col);
        if (won) winnerSpan.innerText = player + " has won!";
        player = player === "X" ? "O" : "X";
    }
}

function decideWinner(player, row, col){
    // check row for winner
    if (board[row].filter(cell => cell === player).length === 3) return true;
    /* let i = 0;
    while (i < 3 && board[row][i] === player) i++;
    if (i == 3) return true; */

    // check column for winner
    if (board.map(r => r[col]).filter(cell => cell === player).length === 3) return true;
    /* i = 0;
    while (i < 3 && board[i][col] === player) i++;
    if (i == 3) return true; */

    // check main diagonal for winner
    if (board.map((r, i) => r[i]).filter(cell => cell === player).length == 3) return true;
    /* i = 0;
    while (i < 3 && board[i][i] === player) i++;
    if (i == 3) return true; */

    // check the other diagonal for winner
    if (board.map((r, i) => r[2-i]).filter(cell => cell === player).length == 3) return true;
    /* i = 0;
    while (i < 3 && board[i][2-i] === player) i++;
    if (i == 3) return true; */

    // else no winner
    return false;
}

delegate(table, "click", "td", handleTdClick);

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}
