const regex = /(\w+)|(\W+)/gm;

function extractWords(tokensList) {
  const wordsInfo = { words: [], indecies: [] };
  tokensList.forEach((token, index) => {
    if (/\w+/gm.test(token)) {
      wordsInfo.words.push(token);
      wordsInfo.indecies.push(index);
    }
  });
  return wordsInfo;
}

function reverseWordOrder(str) {
  if (!str) {
    return str;
  }
  const tokens = str.match(regex);

  const wordsInfo = extractWords(tokens);

  // Reverse words
  wordsInfo.words.reverse();

  // Add words back to tokens after the reverse
  for (let i = 0; i < wordsInfo.words.length; i++) {
    const word = wordsInfo.words[i];
    const index = wordsInfo.indecies[i];
    tokens[index] = word;
  }
  return tokens.join("");
}

module.exports = {
  reverseWordOrder
};
