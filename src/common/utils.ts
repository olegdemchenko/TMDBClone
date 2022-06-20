function isDataDefined<T>(data: T | undefined | null): asserts data is T {
  // eslint-disable-next-line eqeqeq
  if (data == undefined) {
    throw new Error(`Data must be defined. Received data type: ${typeof data}`);
  }
}

function capitalize(phrase:string) {
  return phrase.split(' ').map((word) => {
    if (word === 'tv' || word === 'api') {
      return word.toUpperCase();
    }
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }).join(' ');
}

export {
  capitalize,
  isDataDefined,
};
