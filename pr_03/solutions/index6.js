const button = document.querySelector("button")
const body = document.querySelector("body")
let draggedDiv = null

function randomBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function handleButtonClick() {
    const div = document.createElement("div")
    body.appendChild(div)
    div.style.position = "absolute"
    div.style.left = randomBetween(0, window.innerWidth - 300) + "px"
    div.style.top = randomBetween(0, window.innerHeight - 200) + "px"
}

button.addEventListener("click", handleButtonClick)

function handleDivMouseDown() {
    draggedDiv = this
    draggedDiv.style.borderColor = "green"
}
delegate(body, "mousedown", "div", handleDivMouseDown)

function handleDivMouseUp() {
    draggedDiv.style.borderColor = "black"
    draggedDiv = null
}
delegate(body, "mouseup", "div", handleDivMouseUp)

function handleDivMouseMove(e) {
    if (draggedDiv !== null) {
        const top = parseInt(draggedDiv.style.top.slice(0, -2))
        const left = parseInt(draggedDiv.style.left.slice(0, -2))
        draggedDiv.style.top = top + e.movementY + "px"
        draggedDiv.style.left = left + e.movementX + "px"
    }
}
delegate(body, "mousemove", "div", handleDivMouseMove);

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}