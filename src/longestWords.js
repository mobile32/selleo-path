export const longestWords = sentence => {
  const words = sentence
    .split(" ")
    .reduce((acc, value) => {
      return [...acc, { value, length: value.length }];
    }, [])
    .sort((a, b) => {
      return b.length - a.length;
    });

  return [
    ...new Set(
      words
        .filter(word => word.length === words[0].length)
        .map(word => word.value.toLowerCase())
    )
  ];
};
