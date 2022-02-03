# Chat 🗓️

**Vamos criar a estrutura do nosso chat e fazer ele funcionar inicialmente sem nenhum Back-End. Explicaremos também muitos conceitos de Front-End que funcionam em diversos tipos de projetos para que este chat em si esteja funcionando somente nos componentes React!**

## **Preview** 📃 

<img src="./chat_print.png">

# 


- Quando lidamos com um componente React, para se fazer a referência da página. vamos iniciá-la a partir de uma função onSubmit do botão de entrar, que coloca um href para a página em si...


Para se fazer tudo funcionar, começamos criando uma variável de array, que guarda dois valores...
# 
``` jsx
/* -- Inicialização da variável: */

const [mensagem, setMensagem] = React.useState("");

```

## Porque usar state do React?


**Basicamente quando estamos lidando com o React, tudo que se precisa de renderização da página vem do React, pois não é uma boa prática tratar isso como tratamos com o JS puro, na qual temos um objeto que simplesmente faça a gerencie tudo isso.**

**O React otimizou este trabalho com sua performance, então quando precisamos lidar com isso, é melhor usar essa propriedade do React e deixar com qeu a própria biblioteca lide com esse problema. Oque consegue muito bem com uma ótima performance e menos tempo de execução!**

### **Mas porque precisamos colocar dois valores na variável de array?**

Quando lidamos com a página de chat, pense que quando estamos naquela tela de chat em si, precisamos lidar com dois tipos... A mensagem em si, e ainda uma para a atualização desta mensagem! Pois usamos a principal para um objeto principal da mensagem em si, e como o próprio nome já se diz SETmensagem, usaremos ela para set da mensagem em si, sua atualização!
#
``` jsx 
/* -- Função principal de lógica daquela mensagem que será recebida... */


const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'vanessametonini',
            texto: novaMensagem,
        };

        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
        ]);
        setMensagem('');
    }
```

```jsx
onKeyPress={(event) => {
               if (event.key === 'Enter') {
        event.preventDefault();
        handleNovaMensagem(mensagem);
                  }
     }}
```
## Função lógica:

- Em nossa função principal, perceba que agora precisamos definir como será a estrutura propriamente dita, de toda aquela função _onKeyPress_.

Bom, assim a função começa de um parâmetro de mensagem que foi definida no escopo da função, que será usada em como a nova mensagem, basicamente o objeto que será usado no set. Ela inicializa um objeto que tem 3 argumentos.

**Basicamente constará que, para que não haja muito bug e o nosso código se torne muito extenso e muito complexo, nós colocamos um id padrão próprio para toda e nova mensagem. Já que para se fazer um id do próprio React, ele se tornaria extremamente complexo de se decifrar, assim toda vez que enviaremos uma mensagem com o mesmo conteúdo ele iria ter o mesmo id de React, tornando assim um bug bem perigoso! E assim, não precisamos passar como um objeto React dentro do posicionamento de código, fazendo com que ele seja só parte do componente.**

Os próximos argumentos em si, seriam para que seja colocado um usuário padrão de mensagem, que vamos definir posteriormente, e ainda o texto em si, que foi o argumento em si que usamos, o conteúdo propriamente dito.

**Logo depois colocamos o _setMensagem_, que servirá para que de um array que conterá a mensagem em si, e a lista de mensagem, de todas que já foram enviadas e definidas, usa-se um Rest para este tipo de valor, já que ele conterá tudo naquela variável.**
#