function mergeSort(arr) {
    // if (!Array.isArray(arr) || arr.length ===0 ) return;
    // if (arr.length===1) {
    //     return arr
    // }
    if (!Array.isArray(arr) || arr.length <= 1) { return arr }
    let mid = parseInt(arr.length >> 1),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
    let result = [], il = 0, ir = 0;
    while (il < leftArr.length && ir < rightArr.length) {
        if (leftArr[il] < rightArr[ir]) {
            result.push(leftArr[il++])
        } else {
            result.push(rightArr[ir++])
        }
    }
    while (il < leftArr.length) {
        result.push(leftArr[il++])
    }
    while (ir < rightArr.length) {
        result.push(rightArr[ir++])
    }
    return result;
}
console.log(mergeSort([3, 2, 5, 6, 1, 213, 343, 12]));