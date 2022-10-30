function isValid(input: string): boolean {
  const removeParentheses = (originString: string): boolean => {
    const originLength = originString.length;
    const trimString = originString.replace(/(\(\)|\[\]|\{\})/g, "");
    const newLength = trimString.length;

    if (newLength === 0) return true;
    if (originLength === newLength) return false;

    return removeParentheses(trimString);
  };

  return removeParentheses(input);
}

export default isValid;
