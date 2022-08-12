const isLessThanMax = (n, max) => {
  return n >= 1 && n <= max;
};

const calcTotal = (arr) => {
  if (!isLessThanMax(arr.length, 50)) return;

  const unqualifiedValuse = arr.filter((val) => !isLessThanMax(val, 100));

  if (unqualifiedValuse.length > 0) return;

  result = arr.reduce((accumulator, current) => accumulator + current);

  console.log(result);
};

calcTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
