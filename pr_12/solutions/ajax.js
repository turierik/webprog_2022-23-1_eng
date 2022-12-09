//const loadButton = document.querySelector('#load')
const searchInput = document.querySelector('#search')
const table      = document.querySelector('table')

async function refresh(){
    let resp = await fetch('table.php?search=' + searchInput.value)
    let data = await resp.json()
    console.log(data)
    table.innerHTML = "<tr><th>Name</th><th>Job</th><th>Email</th><th>Phone</th></tr>"
    for (const key in data){
        let tr = document.createElement('tr')
        for (const field in data[key]){
            let td = document.createElement('td')
            td.innerText = data[key][field]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

refresh()
searchInput.addEventListener('input', refresh)
