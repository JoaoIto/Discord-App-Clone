# Log 🧑🏼‍💻

**A página inicial, se retrata uma página de Login padrão, feita para que você identifique seu usuário para que ele faça a identificação a partir de seu link do perfil oficial do GitHub!**

- A página em si foi feita em um design HTML todo programado e já desenvolvido previamente, por isso não tão detalhado em tal documentação vista aqui, porém sem preocupações com essa parte, irei explicar as funções lógicas dessa página...

## **Preview**

<img src="./log_print.png">

# 

```jsx
const [username, setUsername] = React.useState("");
```

## Variável a partir do state React:

**Para fazermos o login dentro do site, precisamos criar uma variável de array para o usuário em si, e outro para um set... Isso tudo envolvido pela propriedade de estado do React**

**Mas porque precisamos usar dois tipos de valores na variável? Bom simplesmente pois a variável que guardará o valor em si, será a de username em si, porém a que será usada para ser um set da própria variável será setUsername**

Vamos explicar isso melhor a partir da função:

# 

```jsx
<TextField
            value={username}
              onChange={function handle(event) {
                console.log("digit");
                // Valor da varival
                const valor = event.target.value;
                // função que usa variavel para trocar para o valor atual
                setUsername(valor);
              }
            }
/>
```
## **Função de _onChange_ para login de usuário:**

A função de _onChange_ foi atribuída ao input que escrevermos o nome de usuário pois ela serve para toda e qualquer mudança  que acontecer dentro do campo, assim fazendo com que depois usarmos uma função de handle( )**para que consigamos dizer oque deve acontecer cada vez que o valor do input muda...

**Bom, colocamos como padrão o primeiro valor da variável de username, e o outro valor de setUsername, será usado simplesmente para a atribuição de novos valores dentro da função de _onChange_.**
**Colocamos um evento como parâmetro da função, e atribuímos o target desse evento a uma variável comum... Ou seja, toda vez que o target, o, o valor do input mudar, essa variável segue o valor de setUsername! fazendo assim com que ele consiga identificar oque foi mudado e assim atribuir isso a mudança de usuário, depois é só identificar a foto de perfil e o nome de usuário...**
# 