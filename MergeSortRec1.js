function mergeSortReccc(arr) {
    const len = arr.length;
    
    if (len <= 1) return arr;

    let mid = Math.floor(len / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    leftArr = mergeSortRec(leftArr);
    rightArr = mergeSortRec(rightArr);

    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
    let merged = [];

    let l = 0, r = 0;

    const leftSize = leftArr.length;
    const rightSize = rightArr.length;

    while (l < leftSize && r < rightSize) {
        if (leftArr[l] < rightArr[r]) {
            merged.push(leftArr[l]);
            l++;
        } else {
            merged.push(rightArr[r]);
            r++;
        }
    }

    while (l < leftSize) {
        merged.push(leftArr[l]);
        l++;
    }

    while (r < rightSize) {
        merged.push(rightArr[r]);
        r++;
    }

    return merged;
}

arr = [5, 3, 2, 8, 4, 5, 7, 8, 9, 18, 22, 54, 65, 38];

console.log( mergeSortRec(arr) );