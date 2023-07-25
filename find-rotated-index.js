function findRotatedIndex(arr, value) {
  let pivot = getMidPoint(arr);
  if (pivot > 0 && value >= arr[0] && value <= arr[pivot - 1]) {
    return findValue(arr, value, 0, pivot - 1);
  } else {
    return findValue(arr, value, pivot, arr.length - 1);
  }
}

function findValue(arr, value, start = 0, end = arr.length - 1) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function getMidPoint(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
module.exports = findRotatedIndex;
