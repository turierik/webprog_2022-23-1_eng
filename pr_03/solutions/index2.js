const ul = document.querySelector('ul')
let last = null
ul.addEventListener('click', function(e){
    if (!e.target.matches('li')) return;
    if (last === null){
        last = e.target
    } else {
        [e.target.innerText, last.innerText] = [last.innerText, e.target.innerText]
        last = null
    }
})