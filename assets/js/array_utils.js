import { quicksort } from './quicksort.js'

function self_min(array) {
    if (array.length < 0) {
        return undefined;
    }
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
} 

function self_max(array) {
    if (array.length < 0) {
        return undefined;
    }
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
} 

function self_median(array) {
    if (array.length < 0) {
        return undefined;
    }
    var sorted_array = quicksort(array);
    if (sorted_array.length % 2 == 1) {
        return sorted_array[sorted_array.length / 2];
    } else {
        return 0.5 * (sorted_array[sorted_array.length / 2] + sorted_array[sorted_array.length / 2 - 1]);
    }
}

export { self_max, self_min, self_median };