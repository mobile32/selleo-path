// Output all the possible substrings of a given string.

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
}

export const substrings = string => {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j <= string.length + 1; j++) {
      const substing = string.substring(i, j)
      substing && result.push(substing)
    }
  }

  return result.filter(unique);
};
