function sortedFrequency(arr, val) {
  let first = first(arr, val);
  if (first === -1) return first;
  let last = second(arr, val);
  return last - first + 1;
}

function first(arr, start = 0, end = arr.length - 1, val) {
  if (val > end) return -1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if ((mid === 0 || arr[mid - 1] < val) && arr[mid] === val) return mid;
    else if (arr[mid] > val) {
      return first(arr, start, mid - 1, val);
    } else {
      return first(arr, mid + 1, end, val);
    }
  }
  return -1;
}

function second(arr, start = 0, end = arr.length - 1, val) {
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if ((mid === arr.length - 1 || arr[mid + 1] > val) && arr[mid] === val)
      return mid;
    else if (arr[mid] > val) {
      return first(arr, start, mid - 1, val);
    } else {
      return first(arr, mid + 1, end, val);
    }
  }
  return -1;
}
module.exports = sortedFrequency;
