const ul = document.querySelector('ul')

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

delegate(ul, 'click', 'li', function(){
    this.style.backgroundColor = 'yellow'
})