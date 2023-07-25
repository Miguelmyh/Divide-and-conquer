function findFloor(arr, value, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  if (value >= arr[end]) return arr[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > value && arr[mid - 1] < value) {
      return arr[mid - 1];
    }
    if (arr[mid] < value && arr[mid + 1] > value) {
      return arr[mid];
    }

    if (arr[mid] > value) {
      return findFloor(arr, value, start, mid - 1);
    } else {
      return findFloor(arr, value, mid + 1, end);
    }
  }
}

module.exports = findFloor;
