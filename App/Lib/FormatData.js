const formatData = (data, numColumns) => {
  let newArr = data

  const numberOfFullRows = Math.floor(newArr.length / numColumns);

  let numberOfElementsLastRow = newArr.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
    ) {
    newArr.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return newArr;
};

export default formatData
