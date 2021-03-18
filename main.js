
function somar(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var soma = n1+n2
    res.innerHTML = `A soma entre ${n1} e ${n2} resulta em ${soma}`
}

function subt(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var subt = n1-n2
    res.innerHTML = `A subtração entre ${n1} e ${n2} resulta em ${subt}`
}

function multi(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)

    var multi = n1*n2
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} resulta em ${multi}`
}

function dividir(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    
    var dividir = n1/n2
    res.innerHTML = `A divisão entre ${n1} e ${n2} resulta em ${dividir}`
}