function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length - i; j++) {
      if (numbers[i] + numbers[i + j] === target) {
        return [i, i + j];
      }
    }
  }

  return [0, 1];
}

export default twoSum;
