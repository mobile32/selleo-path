const deepFlat = array => {
  return array.reduce((acc, toFlatten) => {
    return acc.concat(
      Array.isArray(toFlatten) ? deepFlat(toFlatten) : toFlatten
    );
  }, []);
};

export const arraySum = array => {
  return deepFlat(array).reduce((acc, value) => {
    return acc + value;
  }, 0);
};
