// const isInteger = (n) => {
//   if (!Number.isInteger(n)) {
//     return;
//   } else {
//     console.log(`${n} is integer!`);
//   }
// };

// isInteger(1.333);

const isInteger = (n) => {
  if (typeof n === "number") {
    const remainder = n % 1;
    if (remainder === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(isInteger(-1.13));
