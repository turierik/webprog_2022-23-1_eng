const sizeInput = document.querySelector('input')
const startButton = document.querySelector('button')
const controlsDiv = document.querySelector('div#controls')
const table = document.querySelector('table')
const errorSpan = document.querySelector('span#errorSpan')
const winSpan = document.querySelector('span#youWin')
const timerSpan = document.querySelector('span#timer')

let board = null
let firstTd = null
let secondTd = null
let unguessed = null
let startTime = null

startButton.addEventListener('click', function(){
    let n = sizeInput.valueAsNumber
    if (n % 2 == 0 && n >= 2 && n <= 10)
        startGame(n)
    else {
        errorSpan.style.display = 'block'
    }
})

function startGame(n){
    errorSpan.style.display = 'none'
    controlsDiv.style.display = 'none'
    winSpan.style.display = 'none'
    startTime = Date.now()
    board = []
    unguessed = n*n/2
    firstTd = null
    secondTd = null
    for (let i = 0; i < n; i++) board[i] = []
    for (let i = 0; i < n*n; i++){
        let value = Math.floor(i/2) + 1
        let x, y
        do {
            x = Math.floor(Math.random() * n)
            y = Math.floor(Math.random() * n)
        } while (board[x][y] !== undefined)
        board[x][y] = value
    }
    console.log(board)
    table.innerHTML = ''
    for (let i = 0; i < n; i++){
        let tr = document.createElement('tr')
        for (let j = 0; j < n; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

delegate(table, 'click', 'td', function(){
    if (this.innerText !== '') return;
    let x = this.cellIndex
    let y = this.parentElement.rowIndex
    if (firstTd === null){
        firstTd = this
        this.innerText = board[y][x]
    } else if (secondTd === null) {
        this.innerText = board[y][x]
        if (firstTd.innerText === this.innerText){
            firstTd.style.color = 'orange'
            this.style.color = 'orange'
            firstTd = null
            unguessed--
            if (unguessed == 0){
                winSpan.style.display = 'block'
                controlsDiv.style.display = 'block'
                let sec = (Date.now() - startTime) / 1000
                winSpan.innerText = `You win in ${sec} seconds!`
            }
        } else secondTd = this
    } else {
        firstTd.innerText = ''
        secondTd.innerText = ''
        firstTd = null
        secondTd = null
    }
})

setInterval(function(){
    if (unguessed > 0){
        let dt = Math.floor((Date.now() - startTime) / 1000)
        let sec = String(dt % 60).padStart(2, '0')
        let min = ('0' + Math.floor(dt / 60)).slice(-2)
        timerSpan.innerText = `${min}:${sec}`
    }
}, 500)

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}
