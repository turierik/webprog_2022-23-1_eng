// ERIK TURI - Web programming
// Solutions 2

// EX 1. - BASIC EVENT HANDLING EXAMPLE
// Step 1. reference to the elements involved
const helloButton = document.querySelector('#hellobutton')
const helloText   = document.querySelector('#hellotext')
// Step 2. what will happen?
function handleHelloButtonClick(){
    helloButton.style.display = 'none'
    helloText.style.display   = 'block'
}
// Step 3. event listener - when?
helloButton.addEventListener('click', handleHelloButtonClick)

// EX 2.
const guessInput = document.querySelector('#guessinput')
const guessButton= document.querySelector('#guessbutton')
const guessOutput= document.querySelector('#guessoutput')

let target = Math.floor(Math.random() * 100)
console.log(target)

guessButton.addEventListener('click', function(){
    let n = guessInput.valueAsNumber
    if (n == target)
        guessOutput.innerText = 'Yay! You guessed it.'
    else if (n < target)
        guessOutput.innerHTML = 'Target is greater.'
    else
        guessOutput.innerText = 'Target is less.'
})

// EX 3.
const imageUrl = document.querySelector('#imageurl')
const addImgButton = document.querySelector('#addimg')
const img = document.querySelector('img')

addImgButton.addEventListener('click', function(){
    img.src = imageUrl.value
})

// EX 4. - common
const links = document.querySelectorAll('a[href]')
const ul = document.querySelector('ul')

// EX 4. - version 1
/* for (l of links){
    let li = document.createElement('li')
    li.innerText = l.href
    ul.appendChild(li)
} */

// EX 4. - version 2
ul.innerHTML = Array.from(links).map(l => `<li>${l.href}</li>`).join('')

// EX 5.
const balanceSpan    = document.querySelector('#balance')
const moneyInput     = document.querySelector('#money')
const withdrawButton = document.querySelector('#withdraw')
let balance = 1000

function handleMoneyInput(){
    let amount = parseInt(moneyInput.value)
    moneyInput.classList.toggle('error', isNaN(amount) || amount > balance)
}

function handleWithdrawClick(){
    let amount = parseInt(moneyInput.value)
    if (!isNaN(amount)) balance -= amount
    balanceSpan.innerText = balance
}

moneyInput.addEventListener('input', handleMoneyInput)
withdrawButton.addEventListener('click', handleWithdrawClick)

// EX 6.
const inputs     = [document.querySelector('#field1'), document.querySelector('#field2'), document.querySelector('#field3')]
const loadButton = document.querySelector('#loadrow')
const table      = document.querySelector('#task6')

function handleLoadButtonClick(){
    let tr = document.createElement('tr')
    inputs.forEach(function(field){
        let td = document.createElement('td')
        td.innerText = field.value
        field.value = ''
        tr.appendChild(td)
    })
    table.appendChild(tr)
}

loadButton.addEventListener('click', handleLoadButtonClick)

// EX 7. - common
const nInput = document.querySelector('input#task7')
const multButton = document.querySelector('#multi')
const multTable = document.querySelector('table#task7')

// EX 7. - version 1
multButton.addEventListener('click', function(){
    let n = nInput.valueAsNumber
    multTable.innerHTML = ''
    for (let i = 1; i <= n; i++){
        let tr = document.createElement('tr')
        for (let j = 1; j <= n; j++){
            let td = document.createElement('td')
            td.innerText = i*j
            tr.appendChild(td)
        }
        multTable.appendChild(tr)
    }
})

// EX 7. - version 2
/* multButton.addEventListener('click', function(){
    let n = nInput.valueAsNumber
    let nums = [...Array(n).keys()] // will generate [0, 1, ..., n-1]
    multTable.innerHTML = nums.map((x, _, a) => `<tr>${a.map(y => `<td>${(x+1) * (y+1)}</td>`).join('')}</tr>`).join('')
}) */