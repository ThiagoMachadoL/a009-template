/*const nome = prompt("Qual o seu nome? ")
const cor = prompt("Qual a sua cor favorita? ")

console.log("A cor favorita de "+ nome +" é "+ cor)

const fraseCorFavorita = "A cor favorita de "+nome+" é "+cor
console.log(fraseCorFavorita)

const fraseTempCorFavorita = `A cor favorita de ${nome} é ${cor}`
console.log(fraseTempCorFavorita)

//---------------------

const citacao = prompt(" Escreva uma citação.")
const fraseComCitacao = "A cor favorita de "+nome+" é "+ cor + " \""+ citacao +"\" "
console.log(fraseComCitacao)

console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

//------------------car

console.log(`Nome: ${nome.toUpperCase()} \nCor Favorita: ${cor}`);

console.log(nome.length)

const possuiA = nome.includes("a")
console.log(possuiA)*/

const nomeDoUsuario = prompt("Qual o seu nome? ")
const emailDoUsuario = prompt("Qual o seu e-mail? ")

const frase = `o e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}`
console.log(frase)
console.log(nomeDoUsuario.length)
const fraseCebola = frase.replaceAll("r","l")
console.log(fraseCebola)
const temArroba = emailDoUsuario.includes("@")
console.log(`O email possui @: ${temArroba}`)