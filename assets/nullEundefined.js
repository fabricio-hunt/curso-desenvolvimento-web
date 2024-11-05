/* Em Java, null é um valor especial que indica que uma variável não faz referência a nenhum objeto. Quando uma variável de um tipo de referência é inicializada como null, isso significa que ela não aponta para nenhum objeto ou instância. Se tentarmos acessar um método ou propriedade de uma variável null, obteremos um NullPointerException.

Já em JavaScript, temos tanto null quanto undefined, e a diferença entre eles é importante:

undefined: É o valor padrão para variáveis que foram declaradas, mas não inicializadas. Em outras palavras, uma variável em JavaScript tem o valor undefined se não recebeu nenhum valor explícito.

null: Em JavaScript, null é um valor atribuído explicitamente para indicar a ausência de valor. É um valor "intencional" que o programador define para indicar que uma variável deve estar "vazia" ou sem referência, mas ainda assim foi explicitamente inicializada com esse valor.

Aqui vai um exemplo em JavaScript para ilustrar a diferença entre null e undefined:*/

// Exemplo de undefined
let naoInicializada;
console.log(naoInicializada); // undefined

// Exemplo de null
let semValor = null;
console.log(semValor); // null

// Comparando undefined e null
console.log(naoInicializada === undefined); // true
console.log(semValor === null); // true
console.log(naoInicializada == semValor); // true - são "igualmente" indefinidos
console.log(naoInicializada === semValor); // false - tipos diferentes
