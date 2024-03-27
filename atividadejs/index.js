var nome = "gabriel";
var sobrenome = "lima";
var nomeCompleto = nome + sobrenome;
var idade = 17;
var lasanha = 'lasanha';

console.log(nome);
console.log(sobrenome);

// 1. Declarar uma variável com o seu nome
// 2. Declarar uma variável com o seu sobrenome 
// 3. Declarar uma variável nomeCompleto atribuindo os valores das variaveis nome e sobrenome 
// 4. Declarar uma variável com a sua idade 
// 5. Declarar uma variável com a sua comida favorita e não atribuir valor
// 6. Atribuir valor a sua comida favorita 
// 7. Verifique o erro na variavel criada abaixo que utiliza Template String:
const frase = `Olá, eu sou ${nomeCompleto} e tenho anos`;
console.log(frase);
// o "e tenho ${}" ta errado, n colocou a variavel idade

// 8. Verifique o tipo da variável que contém o seu nome. Dica: console.log(typeof nomeDaVariavel)
console.log(typeof nome)
// Dica saber mais sobre operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
// 9. Qual o resultado da seguinte expressão?
const total = 10 + 5 * 2 / 2 + 20;
//35

// 10. Somar a string '200' com o número 50 e retornar 250
var conta = '200' 
var conta = 200 + 50
console.log(conta)
// 11. Incremente o número 5 e retorne o seu valor incrementado
var x=5
console.log(x)
// 12. Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if ((idade > 18 )) {
    console.log('maior');
} else {
    console.log('menor');
}

// 13. Qual valor é retornado na seguinte expressão?
const expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao) //3
// 14. O que irá aparecer no console?

if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
//falso
// 15. O que irá aparecer no console?

if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
//falso
// 16. Crie uma função que receba como parametro o peso e a altura, e retorne o imc. Dica: calculo para imc: peso / (altura ** 2);
var peso =80.35
var altura = 1.90
var imc = peso* (altura **2)
console.log(imc)

// 17. Crie uma função que verifica se um número é par, e retorne uma mensagem contendo o numero escolhido e se é ou nao par.
// 18. Crie uma função que retorne o tipo de dado do argumento passado nela. Dica use o typeof para verificar o tipo

// Dica: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// 19. Crie uma função que receba um nome e retorne uma mensagem de saudação para o usuario (bom dia/boa tarde/boa noite fulano!) de acordo com o horario
// 20. Crie uma função que me informe a data de hoje quando chamada