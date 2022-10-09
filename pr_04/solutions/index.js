let youtubers = [
    {
        name: 'T-Series',
        videos: 17535,
        subscribers: 226000000,
        total_views: 203188101349
    },
    {
        name: 'Cocomelon - Nursery Rhymes',
        videos: 802,
        subscribers: 144000000,
        total_views: 140043959116
    },
    {
        name: 'SET India',
        videos: 95472,
        subscribers: 143000000,
        total_views: 130361573813
    },
    {
        name: 'PewDiePie',
        videos: 4507,
        subscribers: 112000000,
        total_views: 28537486596
    },
    {
        name: 'Kids Diana Show',
        videos: 1023,
        subscribers: 101000000,
        total_views: 82303088360
    },
    {
        name: 'MrBeast',
        videos: 729,
        subscribers: 105000000,
        total_views: 17480355779
    },
    {
        name: 'Like Nastya',
        videos: 717,
        subscribers: 101000000,
        total_views: 84126451538
    },
    {
        name: 'Vlad and Niki',
        videos: 488,
        subscribers: 87300000,
        total_views: 68558650784
    },
    {
        name: 'WWE',
        videos: 64170,
        subscribers: 91200000,
        total_views: 71692745898
    },
    {
        name: 'Zee Music Company',
        videos: 7008,
        subscribers: 88500000,
        total_views: 50506122721
    },
]

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

// SOLUTION BEGINS HERE!

document.querySelector('#t1').innerText = youtubers.length
document.querySelector('#t2').innerText = Math.max(...youtubers.map(yt => yt.videos))
document.querySelector('#t3').innerText = youtubers.every(yt => yt.videos > 500) ? 'Yes.' : 'No.'
document.querySelector('#t4').innerText = youtubers.filter(yt => yt.subscribers > 100000000).map(x => x.name).join(', ')

const table = document.querySelector('table')
document.querySelector('button').addEventListener('click', function(){
    console.log('The button has been clicked.')
    let n = document.querySelector('input').valueAsNumber
    table.innerHTML = ''
    for (let i = 0; i < n; i++){
        let tr = document.createElement('tr')
        for (let j = 0; j < n; j++){
            let td = document.createElement('td')
            td.innerText = 0
            if (i == j) td.classList.add('diagonal')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
})

delegate(table, 'click', 'td', function(){
    this.innerText = parseInt(this.innerText) + 1
    if (this.innerText >= 5) this.style.color = 'red' 
})