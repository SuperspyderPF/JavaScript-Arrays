function firstDuplicateValue(array) {
    var arr = array.slice()
    let elementSet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (elementSet.has(arr[i])) return arr[i];
        elementSet.add(arr[i]);
    }

    return -1
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
