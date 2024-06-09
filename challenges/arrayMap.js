
function subArray (arr, target) {
    if (!arr.length) return false;
    if (arr[0] === target) return true;
    for(let i = 0; i < arr.length; i += 1) {
        let sum = arr[i];
        for(let j = i + 1; j < arr.length; j += 1) {
            if (sum === target) return true;
            if (sum > target) break;
            sum += arr[j];
        }
    }
    return false;
}

console.log(subArray([4, 2, 7, 1, 9, 5], 17));   // arr = [4, 2, 7, 1, 9, 5], target = 17 => true