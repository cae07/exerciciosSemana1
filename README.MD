# Bem vindo(a) ao repositório de exercícios Fundamentals da Programação

## PRIMEIRA SEMANA
<br>

----------- 

<br>

## Como utilizar este repositório

<br>

**Clone o repositorio para a sua pasta local**

* git clone <strong>git@github.com:cae07/exerciciosSemana1.git</strong>

** entre na pasta clonada **
cd exerciciosSemana1

**Instale as dependências**
* npm install

**Para rodar os testes**
* npm run test
<br>

-------

<br>

## Divirta-se
<br>

----------

## ARRAYS

<br>

```
const array = [7, 18, 20, 37, 5, 1, 97, 15]
```

<br>

------------

<br>

**IMPLEMENTAR FUNÇÃO SUM**
<p>O método sum recebe um array igual ao exemplo como parâmetro e deve retornar a soma de todos os elementos </p>

<br>

-------------

<br>

**IMPLEMENTAR FUNÇÃO MULTIPLICATION**
<p>O método multiplication recebe um array igual ao exemplo como parâmetro e deve retornar a multiplicação de todos os elementos </p>

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO AVERAGE**
<p>O método average recebe um array igual ao exemplo como parâmetro e deve retornar a média da soma de todos os elementos </p>

<br>

----------
<br>

```
const newArray = ['batata', 'cenoura', 'chuchu', 'beterraba']
```
<br>

-------------

<br>

**IMPLEMENTAR FUNÇÃO LASTTEM**
<p> O método lastItem recebe um newArray igual ao exemplo como parâmetro e deve retornar o último elemento </p>

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO ADDITEM**
<p>O método addItem recebe um novoItem = 'Novo valor' e um newArray igual ao exemplo como parâmetro e deve retornar o array com o novo elemento adicionado na última posição do array </p>

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO REMOVELASTITEM**
<p>O método removeLastItem recebe um newArray igual ao exemplo como parâmetro e deve retornar o array sem o último elemento</p>

<br>

----------

<br>

## OBJETOS

<br>

```
const firstObj = {
  nome: 'Nome do usuário',
  idade: 18,
  endereco: {
    rua: 'das batatas'
    numero: 47
    cidade: 'SP'
  },
  telefone: {
    escritorio: '(11) 4871-2823',
    celular: '(11) 9871-2823'
  }
}
```

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO RESCUEBYKEY**
<p>O método rescueByKey recebe uma chave e um objeto como do exemplo como parâmetro e deve retornar o valor referente àquela chave</p>

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO RETURNSTREETNAME**
<p>O método returnStreetName recebe um objeto como do exemplo como parâmetro e deve retornar o "O nome da rua = nome da rua"</p>

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO RETURNMOBILENUMBER**
<p>O método returnMobileNumber recebe um objeto como do exemplo como parâmetro e deve retornar o "O número do celular é numero_do_celular"</p>

<br>

----------

<br>

```
 const arrayObj = [
  {
    nome: 'Thiago',
    idade: 37,
    interesses: ['bola', 'games', 'viajar', 'caminhar'],
    endereco: {
      rua: 'das batatas',
      cidade: 'SP'
    }
  },
  {
    nome: 'Luiz',
    idade: 39,
    interesses: ['bola', 'correr'],
    endereco: {
      rua: 'das cenouras',
      cidade: 'SP'
    }
  },
  {
    nome: 'Thais',
    idade: 17,
    interesses: [games', 'viajar', 'correr'],
    endereco: {
      rua: 'das esmeraldas',
      cidade: 'SP'
    }
  },
  {
    nome: 'Fernanda',
    idade: 52,
    interesses: ['viajar'],
    endereco: {
      rua: 'das abobrinhas',
      cidade: 'MG'
    }
  },
    {
    nome: 'Roberta',
    idade: 32,
    interesses: ['viajar', 'caminhas'],
    endereco: {
      rua: 'das cigarras',
      cidade: 'MG'
    }
  },
 ]
```

<br>

---------

<br>

**IMPLEMENTAR FUNÇÃO RETURNBYINTEREST**
<p>O método returnNameByInterest recebe um array de objetos como do exemplo e um interesse como parâmetro e deve retornar um array com o nome de todos que possuam o mesmo interesse</p>

<br>

----------

<br>

**IMPLEMENTAR FUNÇÃO RETURNAVERAGEBYCITY**
<p>O método returnAverageByCity recebe um array de objetos como do exemplo e uma cidade como parâmetro e deve retornar a média da idade das pessoas que moram nesta cidade</p>

**ATENÇÃO**
<p>NO CASO DE NÚMERO QUEBRADO, DEVE-SE ARREDONDAR A RESPOSTA PARA BAIXO</p>

<br>

----------
