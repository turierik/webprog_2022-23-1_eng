const table = document.querySelector('table')

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

delegate(table, 'mouseover', 'tr', function(){
    this.style.backgroundColor = 'yellow'
})

delegate(table, 'mouseout', 'tr', function(){
    this.style.backgroundColor = ''
})

delegate(table, 'click', 'td', function(){
    console.log(this.cellIndex, this.parentElement.rowIndex)
})