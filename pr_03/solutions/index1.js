const outputSpan = document.querySelector('span')
let last = null
window.addEventListener('click', function(e){
    if (last === null){
        outputSpan.innerText = 'Waiting for the second click...'
    } else {
        console.log(e)
        let dt = e.timeStamp - last.timeStamp
        let ds = ((e.offsetX - last.offsetX)**2 + (e.offsetY - last.offsetY)**2) ** 0.5
        outputSpan.innerHTML = `Time: ${dt} ms<br>Distance: ${ds} px`
    }
    last = e
})