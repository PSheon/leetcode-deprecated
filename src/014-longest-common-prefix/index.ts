function longestCommonPrefix(inputs: string[]): string {
  const minLength = Math.min(...inputs.map((item) => item.length));
  let prefix = "";

  for (let i = 0; i < minLength; i++) {
    const currentChar = inputs[0].charAt(i);

    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j][i] !== currentChar) {
        return prefix;
      }
    }

    prefix += currentChar;
  }

  return prefix;
}

export default longestCommonPrefix;
