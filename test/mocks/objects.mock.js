const firstObj = {
  nome: 'Paulo',
  idade: 42,
  cidade: 'SC',
  interesses: ['jogar bola', 'viajar'],
  telefone: {
    casa: null,
    celular: '(47) 9874-1347'
  }
};
const secondObj = {
  nome: 'Rosana',
  idade: 62,
  cidade: 'SP',
  interesses: ['jogar videogame', 'viajar'],
  telefone: {
    casa: null,
    celular: '(17) 9974-2037'
  }
};
const thirdObj = {
  nome: 'Thiago',
  idade: 12,
  cidade: 'SC',
  interesses: ['jogar volei', 'jogar bola', 'viajar'],
  telefone: {
    casa: null,
    celular: '(67) 8974-2931'
  }
};

const streetNameOne = {
  nome: 'Batata',
  endereco: {
    rua: 'das batatas',
    numero: 54
  }
}

const streetNameTwo = {
  nome: 'Esmeralda',
  endereco: {
    rua: 'das esmeraldas',
    numero: 154
  }
}

const streetNameThree = {
  nome: 'Amando',
  endereco: {
    rua: 'das amantes',
    numero: 14
  }
}

const firstArray = [
  firstObj, secondObj, thirdObj
]

const objFinalTest1 = {
  nome: 'X',
  idade: 17,
  endereco: {
    rua: 'x',
    cidade: 'SC'
  }
};

const objFinalTest2 = {
  nome: 'X',
  idade: 27,
  endereco: {
    rua: 'x',
    cidade: 'SC'
  }
};

const objFinalTest3 = {
  nome: 'X',
  idade: 67,
  endereco: {
    rua: 'x',
    cidade: 'SC'
  }
};

const objFinalTest4 = {
  nome: 'X',
  idade: 37,
  endereco: {
    rua: 'x',
    cidade: 'SP'
  }
};

const objFinalTest5 = {
  nome: 'X',
  idade: 87,
  endereco: {
    rua: 'x',
    cidade: 'SP'
  }
};

const objFinalTest6 = {
  nome: 'X',
  idade: 57,
  endereco: {
    rua: 'x',
    cidade: 'SP'
  }
};

const arrayFinal = [
  objFinalTest1,
  objFinalTest2,
  objFinalTest3,
  objFinalTest4,
  objFinalTest5,
  objFinalTest6
]

module.exports = {
  firstObj,
  secondObj,
  thirdObj,
  streetNameOne,
  streetNameTwo,
  streetNameThree,
  firstArray,
  arrayFinal
}