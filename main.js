
function somar(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var soma = n1+n2
    res.innerHTML = `<b>A soma entre ${n1} e ${n2} resulta em <u>${soma}</u></b>`
}

function subt(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var subt = n1-n2
    res.innerHTML = `<b>A subtração entre ${n1} e ${n2} resulta em <u>${subt}</u></b>`
}

function multi(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var multi = n1*n2
    res.innerHTML = `<b>A multiplicação entre ${n1} e ${n2} resulta em <u>${multi}</u></b>`
}

function dividir(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    
    var dividir = n1/n2
    res.innerHTML = `<b>A divisão entre ${n1} e ${n2} resulta em <u>${dividir}</u></b>`
}