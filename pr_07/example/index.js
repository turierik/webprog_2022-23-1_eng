const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let objs = [{
    x: 100,
    y: 100,
    r: 50,
    color: 'orange',
    v: 0.15
}, {
    x: 150,
    y: 200,
    r: 30,
    color: 'blue',
    v: 0.10
},
{
    x: 300,
    y: -50,
    r: 40,
    color: 'green',
    v: 0.2
}]

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    objs.forEach(function(obj){
        ctx.beginPath()
        ctx.arc(obj.x, obj.y, obj.r, 0, 2*Math.PI)
        ctx.fillStyle = obj.color
        ctx.fill()
    })
}

let last = performance.now()

const GRAVITY = 0.005
function update(dt){
    objs.forEach(function(obj){
        obj.v += GRAVITY * dt
        obj.y += obj.v * dt
        if (obj.y + obj.r > canvas.height){
            obj.y = canvas.height - obj.r
            obj.v *= -1
        }
    })
}

function gameLoop(){
    render()
    let now = performance.now()
    let dt = now - last
    last = now
    update(dt)
    requestAnimationFrame(gameLoop)
}

gameLoop()

canvas.addEventListener('click', function(e){
    objs.push({
        x: e.offsetX,
        y: e.offsetY,
        r: parseInt(document.querySelector('#radius').value),
        color: document.querySelector('#color').value,
        v: 0.1
    })
})
