export const integerDifference = (difference, array) => {
  let count = 0;

  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
      if (array[i] - array[j] === difference) count++;
    }
  }

  return count;
};
