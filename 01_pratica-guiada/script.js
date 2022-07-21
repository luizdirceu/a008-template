//CODIGO AQUI
// let saldo = 15
// let saldoatualizado = saldo + 22.40
// console.log (saldoatualizado)

// saldoatualizado = saldoatualizado - 12.34

// console.log (saldoatualizado)

// let parteporirmao = saldoatualizado / 3
// console.log (parteporirmao)

// let minhaparte = parteporirmao * 3.42
// console.log (minhaparte)

// let dinheiroquerestou = minhaparte % 3
// console.log (dinheiroquerestou)

///-----------------------------------------------------------------//
// operação com precedencia!

// let operacao = 2 * 2 + 2
// console.log (operacao)

// let operacaocomprecedencia = 2 * (2 + 2)
// console.log (operacaocomprecedencia)

///------------------------------------------------------------///

// IGUAL E DIFERENTE!

// const cincoeigualacinco = 5 === 5
// const cincoediferentedecinco = 5 !== 5 
// const cinconumberediferentedecincostring = 5 !== "5"
// const cincostringEigualcincocorrido = 5 === "cinco"
// const typeofcincoEigualAtypeofvinte = typeof 5 === typeof 20
// const typeOfCincoStringEhIgualTypeOfCincoCorrido = typeof "5" === typeof "cinco"

// console.log (cincoeigualacinco)
// console.log (cincoediferentedecinco)
// console.log (cinconumberediferentedecincostring)
// console.log (cincostringEigualcincocorrido)
// console.log (typeofcincoEigualAtypeofvinte)
// console.log (typeOfCincoStringEhIgualTypeOfCincoCorrido)

/// ------------------------------------------------------------------------------------------------///
// MENOR E MAIOR 

// const numero1 = 15
// const numero2 = 32

// console.log('O primeiro numero é igual ao segundo',numero1 === numero2)
// console.log('O primeiro numero é menor ou igual ao segundo', numero1 <= numero2)
// console.log('O primeiro numero é maior ao segundo', numero1 > numero2)
// console.log('O primeiro numero é menor que segundo', numero1 < numero2)

///----------------------------------------------------------------------------------------------///

// const a = 'Quero dirigir um Celta 2012'
// const b = 'Sou maior de idade'
// const c = 'Consigo comprar o Celta por 22.000 reais'
// const d = 'Consigo alugar o Celta'
// const e = 'Tenho carteira de motorista'

// a
// !b
// b && (!e)
// b && (c || d)
// (b && e) && !a


// let idade1 = prompt ("qual a sua idade")
// let idade2 = prompt ("qual a idade da sua amiga")

// console.log ("a idade 1 e maior que a idade 2", idade1 > idade2)
// idade1 - idade2  
// console.log (idade1 - idade2)

const a = "vou para a praia!"
const b = "sou maior de idade"
const c = "posso tomar uma cervejinha"
const d = "quero passear de carro"

console.log (!b&&d)
console.log (b && a && (!d))
console.log (a || d)
c && !d
