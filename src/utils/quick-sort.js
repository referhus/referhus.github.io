export function quickSort(arr, key) {
  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[arr.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][key] < pivot[key]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
