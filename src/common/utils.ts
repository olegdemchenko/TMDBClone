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
};
