/* A função declarativa em JavaScript é uma das formas mais clássicas de declarar uma função. Ela é definida com a palavra-chave function, 
seguida pelo nome da função, uma lista de parâmetros entre parênteses ( ) e um bloco de código delimitado por chaves { }.
Aqui está uma explicação detalhada de seus aspectos:
 */

/* function: Palavra-chave que indica que você está declarando uma função.
nomeDaFuncao: Nome da função, usado para chamá-la mais tarde.
parametro1, parametro2, ...: São os valores que a função pode receber ao ser chamada. Eles atuam como variáveis internas da função.
return: (Opcional) Define o valor que a função devolve após sua execução.
  */

function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}
// Chamada da função
console.log(cumprimentar("Maria")); // Saída: Olá, Maria!
