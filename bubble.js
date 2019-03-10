function bubbleSort(array) {
  var arrLength = array.length - 1

  while (true) {
    var bool = true;
    array.forEach((e, i) => {
      if (i > arrLength) {
        return;
      }

      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        bool = false;
      }
    });

    if (bool) {
      break;
    }
  }

  return array;
}

function swap(array, index1, index2) {
  var one = array[index1]
  var two = array[index2]
  array[index1] = two
  array[index2] = one
}

module.exports = bubbleSort
