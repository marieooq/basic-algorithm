const isLessThanHundred = (n) => {
  return n >= 1 && n <= 100;
};

const addThreeIntegers = (a, b, c) => {
  if (isLessThanHundred(a) && isLessThanHundred(b) && isLessThanHundred(c)) {
    console.log(a + b + c);
  }
};

addThreeIntegers(99, 101, 99);
