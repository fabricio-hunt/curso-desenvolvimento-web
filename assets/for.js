for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  console.log(i)
  // Saída:
  // 1
  // 2
  // 3
  // 4
  // 5

  
  /* 
O for em JavaScript é uma estrutura de repetição usada para executar um bloco de código várias vezes, enquanto uma condição for verdadeira. É útil quando você sabe antecipadamente quantas vezes deseja repetir uma ação. A estrutura básica do for é composta de três partes principais: inicialização, condição e incremento.

Estrutura do for
javascript
Copiar código
for (inicialização; condição; incremento) {
  // Bloco de código a ser executado
}
Partes do for
Inicialização: É executada uma única vez, antes do loop começar. Normalmente, é usada para declarar e inicializar uma variável de controle, como let i = 0.

Condição: Uma expressão booleana que é avaliada antes de cada iteração. Se for true, o bloco de código dentro do for será executado. Se for false, o loop termina.

Incremento: Executado após cada iteração do loop. Geralmente, incrementa ou altera o valor da variável de controle, como i++.

Exemplo Simples
Imprimir números de 1 a 5:

javascript
Copiar código
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Saída:
// 1
// 2
// 3
// 4
// 5
Como Funciona:
Inicialização: let i = 1 é executado.
Condição: Verifica se i <= 5.
Bloco de código: Se a condição for true, executa console.log(i).
Incremento: Após a execução do bloco, i++ é executado.
Repetição: Retorna à condição e repete o ciclo enquanto a condição for verdadeira. */