// # Exercício 3

// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

// a) 5 é maior que 20 e também é menor que 2;
operacao = 5 > 20 && 5 < 2
console.log('5 é maior que 20 e também é menor que 2:', operacao)
// b) 5 é igual a 5 ou é igual a “5”;
operacao2 = 5 === 5 || 5 === '5'
console.log("5 é igual a 5 ou é igual a '5':", operacao2)
// c) negação de (vinte é maior que cinquenta)
operacao3 = 20 > 50
console.log('negação de (vinte é maior que cinquenta):', !operacao3)
// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
operacao4 = 20 > 50 || 50 > 60
console.log(
  'negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta):',
  !operacao4
)
// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```
