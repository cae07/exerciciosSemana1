const {
  rescueByKey,
  returnStreetName,
  returnMobileNumber,
  returnNameByInterest,
  returnAverageByCity,
} = require("../../objetos");
const {
  firstObj,
  secondObj,
  thirdObj,
  streetNameOne,
  streetNameThree,
  firstArray,
  arrayFinal,
  streetNameTwo
} = require("../mocks/objects.mock");

describe('Object méthods', () => {
  describe('Function rescueByKey should perform in each case', () => {
    it('First case', () => {
      const response = rescueByKey('idade', firstObj);
      expect(response).toBe(42);
    });

    it('Second case', () => {
      const response = rescueByKey('nome', secondObj);
      expect(response).toBe('Rosana');
    });

    it('Third case', () => {
      const response = rescueByKey('cidade', thirdObj);
      expect(response).toBe('SC');
    });
  });

  describe('Function returnStreetName should perform in each case', () => {
    const initialResponse = 'O nome da rua =';
    it('First case', () => {
      const response = returnStreetName(streetNameOne);
      expect(response).toBe(`${initialResponse} das batatas`);
    });

    it('Second case', () => {
      const response = returnStreetName(streetNameTwo);
      expect(response).toBe(`${initialResponse} das esmeraldas`);
    });

    it('Third case', () => {
      const response = returnStreetName(streetNameThree);
      expect(response).toBe(`${initialResponse} das amantes`);
    });
  });
  
  describe('Function returnMobileNumber should perform in each case', () => {
    const initialText = 'O número do celular é';
    it('First case', () => {
      const response = returnMobileNumber(firstObj);
      expect(response).toBe(`${initialText} (47) 9874-1347`);
    });

    it('Second case', () => {
      const response = returnMobileNumber(secondObj);
      expect(response).toBe(`${initialText} (17) 9974-2037`);
    });

    it('Third case', () => {
      const response = returnMobileNumber(thirdObj);
      expect(response).toBe(`${initialText} (67) 8974-2931`);
    });
  });

  describe('Function returnNameByInterest should perform in each case', () => {
    it('First case', () => {
      const response = returnNameByInterest(firstArray, 'viajar');
      const expectResponse = ['Paulo', 'Rosana', 'Thiago']
      expect(response).toEqual(expectResponse);
    });

    it('Second case', () => {
      const response = returnNameByInterest(firstArray, 'jogar bola');
      const expectResponse = ['Paulo', 'Thiago']
      expect(response).toEqual(expectResponse);
    });

    it('Third case', () => {
      const response = returnNameByInterest(firstArray, 'jogar videogame');
      const expectResponse = ['Rosana']
      expect(response).toEqual(expectResponse);
    });
  });

  describe('Function returnAverageByCity should perform in each case', () => {
    it('First case', () => {
      const response = returnAverageByCity(arrayFinal, 'SP');
      expect(response).toBe(60);
    });

    it('Second case', () => {
      const response = returnAverageByCity(arrayFinal, 'SC');
      expect(response).toBe(37);
    });
  });
})