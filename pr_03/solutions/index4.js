const controlsDiv = document.querySelector("#controls")
const paintDiv = document.querySelector("#paint")
const widthInput = document.querySelector("#width")
const heightInput = document.querySelector("#height")
const startButton = document.querySelector("#start")
const colorInput = document.querySelector("input[type=color]")
const table = document.querySelector("table")

function handleStartButtonClick(){
    controlsDiv.style.display = "none"
    paintDiv.style.display = "block"
    let w = widthInput.valueAsNumber
    let h = heightInput.valueAsNumber
    for (let i = 0; i < h; i++){
        let tr = document.createElement("tr")
        for (let j = 0; j < w; j++){
            let td = document.createElement("td")
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

function paintTd(event){
    event.preventDefault()
    if (event.type == "click" || event.buttons == 1)
        this.style.backgroundColor = colorInput.value
}

startButton.addEventListener("click", handleStartButtonClick)
delegate(table, "click", "td", paintTd)
delegate(table, "mousemove", "td", paintTd)

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}
