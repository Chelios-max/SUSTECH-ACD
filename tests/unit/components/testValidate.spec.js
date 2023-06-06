import {
  isArray,isnumber,
  isExternal, isString, validAlphabets, validEmail,
  validLowerCase,
  validUpperCase,
  validURL,
  validUsername
} from '@/utils/validate';
import {int} from "mockjs/src/mock/random/basic";


describe('isexternal', () => {
  test('should return the correct result', () => {
    const result =isExternal('www.baidu.con');
    expect(result).toBe(false);
  });
});

describe('username', () => {
  test('should return the correct result', () => {
    const result =validUsername('wo');
    expect(result).toBe(false);
  });
});

describe('url', () => {
  test('should return the correct result', () => {
    const result =validURL('ww.56789][][');
    expect(result).toBe(false);
  });
});

describe('validLowerCase', () => {
  test('should return the correct result', () => {
    const result =validLowerCase('a');
    expect(result).toBe(true);
  });
});
describe('validUpperCase', () => {
  test('should return the correct result', () => {
    const result =validUpperCase('A');
    expect(result).toBe(true);
  });
});
describe('validalphabets', () => {
  test('should return the correct result', () => {
    const result =validAlphabets('AsdsQW');
    expect(result).toBe(true);
  });
});

describe('validEmail', () => {
  test('should return the correct result', () => {
    const result =validEmail('126852321@qq.com');
    expect(result).toBe(true);
  });
});

describe('isstring', () => {
  test('should return the correct result', () => {
    const result =isString('AsdsQW');
    expect(result).toBe(true);
  });
});

describe('notstring', () => {
  test('should return the correct result', () => {
    const result =isString(8);
    expect(result).toBe(false);
  });
});
describe('isarray', () => {
  test('should return the correct result', () => {
    const result =isArray(8);
    expect(result).toBe(false);
  });
});

describe('isnumber', () => {
  test('should return the correct result', () => {
    const result =isnumber(1);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(2);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(3);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(4);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(5);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(6);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(7);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(8);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(9);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(10);
    expect(result).toBe(true);
  });test('should return the correct result', () => {
    const result =isnumber(11);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(12);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(13);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(14);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(15);
    expect(result).toBe(true);
  });test('should return the correct result', () => {
    const result =isnumber(16);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(17);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(18);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(19);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(20);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(21);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(22);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(23);
    expect(result).toBe(true);
  });test('should return the correct result', () => {
    const result =isnumber(24);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(25);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(26);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(27);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(28);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(29);
    expect(result).toBe(true);
  });
  test('should return the correct result', () => {
    const result =isnumber(30);
    expect(result).toBe(true);
  });

});
