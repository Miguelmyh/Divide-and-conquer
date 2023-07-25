function countZeroes(arr, start, end) {
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === 1) {
      return countZeroes(arr, mid + 1, end);
    } else if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else {
      return countZeroes(arr, 0, mid - 1);
    }
  }
  return -1;
}
let arr = [1, 1, 1, 1, 0, 0, 0, 0, 0];
let rest = countZeroes(arr, 0, arr.length - 1);
if (rest === -1) {
  console.log("actual:", 0);
}
console.log("result", arr.length - rest);

module.exports = countZeroes;
