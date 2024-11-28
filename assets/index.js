/* Explicação sobre Variáveis em JavaScript com Node.js
Variáveis em JavaScript são utilizadas para armazenar dados temporários que podem ser manipulados ao longo da execução do programa. JavaScript permite a criação de variáveis com três palavras-chave principais:

var - utilizada desde as versões iniciais do JavaScript, possui escopo de função e pode ser redeclarada. Com a introdução de let e const, seu uso foi reduzido.
let - introduzido no ECMAScript 6 (ES6), possui escopo de bloco (dentro de {}) e permite alterações no valor da variável.
const - também introduzido no ES6, cria variáveis de valor constante, ou seja, que não podem ser reatribuídas depois de inicializadas.
Diferenças e Boas Práticas
Escopo: let e const possuem escopo de bloco, enquanto var possui escopo de função. O escopo de bloco evita problemas de variáveis acessíveis fora de seu bloco.
Mutabilidade: const é utilizado para valores constantes que não devem ser alterados. let permite reatribuição de valores.
Boa prática: preferir let e const para evitar problemas de escopo e facilitar a manutenção.
Exemplo de Código */

// Declarando variáveis com let, const e var
let nome = "João";
let sobrenome = " Da Silva Santos";
const idade = 30;
var cidade = "São Paulo";

// Alterando a variável let
nome = "Maria";

// Tentando alterar a variável const (vai gerar um erro)
// idade = 25; // Descomente para ver o erro

console.log(`Nome: ${nome + sobrenome}`);
console.log(`Idade: ${idade}`);
console.log(`Cidade: ${cidade}`);

