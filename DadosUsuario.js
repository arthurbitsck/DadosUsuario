// 1. coletar do meus usuário: nome, idade, peso, altura e profissão. Exibir essas informações em um texto.

var nome = prompt('Digite o seu nome:')
var idade = parseInt(prompt('Digite a sua idade:'))
var peso = parseFloat(prompt('Digite o seu peso em kg:'))
var altura = parseFloat(prompt('Digite a sua altura em metros:'))
var profissao = prompt('Digite a sua profissão:')

// exibir um texto com essas informações

console.log('Olá, ' + nome + ', você tem ' + idade + ' anos, pesa ' + peso + ' Kg, possui ' + altura + ' de altura e trabalha como ' + profissao + '.')

// verificar se o usuário é maior ou menor de idade

if(idade >= 18){
    console.log('Está liberado para tomar umas geladas!')
}else{
    console.log('Sem gelada para você!')
}

// exibindo sua idade em meses, semanas e dias.

var meses = idade * 12
var semanas = idade * 52
var dias = idade * 365

console.log('Sua idade em meses é: ' + meses)
console.log('Sua idade em semanas é: ' + semanas)
console.log('Sua idade em dias é: ' + dias)

// calculo do imc

var imc = peso / (altura * altura)

if(imc < 18,5){
    console.log('magreza.')
}

if(imc >= 18,5 && imc <= 24,9){
    console.log('normal.')
}

 if(imc >= 25 && imc <= 30){
    console.log('sobrepeso.') 
}

if(imc > 30){
    console.log('obesidade.')
}

// informar o ano de nascimento

var anoNasc = 2023 - idade
console.log('Ano de nascimento: ' + anoNasc)


for (var contador = 0; contador <= idade; contador++) {
    console.log(contador + ' anos de idade')
    
}
