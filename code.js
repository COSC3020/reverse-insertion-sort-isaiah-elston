function insertionSortReverse(array) {
    for (let i = array.length - 2; i >= 0; i--) {
        let val = array[i];
        let j;
        for (j = i; j < array.length && array[j + 1] < val; j++) {
            array[j] = array[j + 1];
        }
    array[j] = val;
    }
return array;
}