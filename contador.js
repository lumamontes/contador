const botao = document.querySelector('#btn')
let data = document.querySelector('#data')
botao.addEventListener('click', iniciarContagem)

let date = new Date()
let anoAtual = date.getFullYear()
let diaAtual = date.getDay()
let horaAtual = date.getHours()
let minutosAtual = date.getMinutes()
let segundosAtual = date.getSeconds()
// console.log(diaAtual)
// console.log(horaAtual)
// console.log(minutosAtual)
// console.log(segundosAtual)

let dataIN = 0
function iniciarContagem() {
    dataIN = data.value
    var resultado = dataIN.split('-')
    // resultado = Number()
    let anoInformado = resultado[0]
    let diaInformado = resultado[1]
    //    anoInformado = parseInt(data.value[6])
    // console.log(data.value)
    // console.log(typeof anoInformado)
    // console.log(anoInformado)

}
