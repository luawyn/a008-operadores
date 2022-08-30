// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
console.log('Primeiro número =', num1)
console.log('Segundo número =', num2)
const maiorQue = num1 > num2
console.log('O primeiro número é maior que o segundo número?', maiorQue)
// O primeiro numero é igual ao segundo? false
const igual = num1 === num2
console.log('O primeiro número é igual ao segundo número?', igual)
// O primeiro numero é divisível pelo segundo? true
const divisível1 = num1 % num2 === 0
console.log('O primeiro número é divisível pelo segundo número?', divisível1)
// O segundo numero é divisível pelo primeiro? true
const divisível2 = num2 % num1 === 0
console.log('O primeiro número é divisível pelo segundo número?', divisível2)
// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```
