// documentation section for the project

const table = document.querySelector('[tableBody]')
const sh1 = document.querySelector('[bank-bal]')
const sh2 = document.querySelector('[cash-bal]')
let def_value = 431.96 + paycutmay2022 - may2022
const bankBal = def_value
const cashBal = 0
const aExp = document.querySelector('[actual-exp]')
const dExp = document.querySelector('[diff-exp]')
const diaActual = document.querySelector('[actual-dia]')

//________________________________________________________
const mainBody = document.querySelector('[MainBody]')

mainBody.style.backgroundColor = '#444'
mainBody.style.color = '#999'
//________________________________________________________

window.addEventListener('load',e=>{
    items.forEach(item => {
        let row = document.createElement("tr")
        Object.values(item).forEach(text => {
            let cell = document.createElement("td")
            let textNode = document.createTextNode(text)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        table.appendChild(row)
    })
    
    sh1.textContent = bankBal
    if(bankBal < 500) {
        sh1.style.color = 'red'
        sh1.style.fontWeight = 'bold'
    }
    sh2.textContent = cashBal
    aExp.textContent = may2022
    dExp.textContent = 500 - may2022
    diaActual.textContent = may2022
    diaActual.style.width = may2022 /500 *50+'%'
    if (may2022 > 500){
        diaActual.style.background = 'red'
    }

})

