/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example:

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000 */

function plusMinus(arr: number[]): void {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Count positive, negative, and zero elements
  for (let num of arr) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  // Calculate ratios
  const total = arr.length;
  const positiveRatio = positiveCount / total;
  const negativeRatio = negativeCount / total;
  const zeroRatio = zeroCount / total;

  // Print ratios with specified precision
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
