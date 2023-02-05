const {
  firstCase,
  secondCase,
  thirdCase,
  lastItemOne,
  lastItemTwo,
  lastItemThree
} = require( "../mocks/arrays.mock");
const {
  sum,
  multiplication,
  average,
  lastItem,
  addItem,
  removeLastItem
} = require('../../arrays');

describe('Arrays méthods', () => {
  
  describe('Function sum should perform in each case', () => {
    it('First case', () => {
      const response = sum(firstCase);
      expect(response).toBe(143);
      delete global.foo
    });

    it('Second case', () => {
      const response = sum(secondCase);
      expect(response).toBe(149);
    });

    it('Third case', () => {
      const response = sum(thirdCase);
      expect(response).toBe(16);
    });
  });
  describe('Function multiplication should perform in each case', () => {
    it('First case', () => {
      const response = multiplication(firstCase);
      expect(response).toBe(1893528000);
    });

    it('Second case', () => {
      const response = multiplication(secondCase);
      expect(response).toBe(38102400);
    });

    it('Third case', () => {
      const response = multiplication(thirdCase);
      expect(response).toBe(84);
    });
  });

  describe('Function average should perform in each case', () => {
    it('First case', () => {
      const response = average(firstCase);
      expect(response).toBe(14.3);
    });

    it('Second case', () => {
      const response = average(secondCase);
      expect(response).toBe(18.625);
    });

    it('Third case', () => {
      const response = average(thirdCase);
      expect(response).toBe(4);
    });
  });

  describe('Function lastItem should perform in each case', () => {
    it('First case', () => {
      const response = lastItem(lastItemOne);
      expect(response).toBe('pera');
    });

    it('Second case', () => {
      const response = lastItem(lastItemTwo);
      expect(response).toBe('skate');
    });

    it('Third case', () => {
      const response = lastItem(lastItemThree);
      expect(response).toBe('José');
    });
  });

  const newItem = 'Novo item';
  describe('Function addItem should perform in each case', () => {
    it('First case', () => {
      const response = addItem(newItem, lastItemOne);
      expect(response.length).toBe(5);
    });

    it('Second case', () => {
      const response = addItem(newItem, lastItemTwo);
      expect(response.length).toBe(4);
    });

    it('Third case', () => {
      const response = addItem(newItem, lastItemThree);
      expect(response.length).toBe(6);
    });
  });

  describe('Function removeLastItem should perform in each case', () => {
    it('First case', () => {
      const response = removeLastItem(lastItemOne);
      expect(response.includes(newItem)).toBe(false);
    });

    it('Second case', () => {
      const response = removeLastItem(lastItemTwo);
      expect(response.includes(newItem)).toBe(false);
    });

    it('Third case', () => {
      const response = removeLastItem(lastItemThree);
      expect(response.includes(newItem)).toBe(false);
    });
  });
});
