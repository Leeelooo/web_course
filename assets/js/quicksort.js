

function quicksort(array) {
    return innerQuicksort(array, 0, array.length - 1);
}

function innerQuicksort(array, left, right) {
    var i;
    if (array.length > 1) {
        i = partition(array, left, right);
        if (left < i - 1) {
            innerQuicksort(array, left, i - 1);
        }
        if (i < right) {
            innerQuicksort(array, i, right);
        }
    }
    return array;
}

function partition(array, left, right) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left));
    const pivot = array[pivotIndex];
    var i = left;
    var j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

export { quicksort };