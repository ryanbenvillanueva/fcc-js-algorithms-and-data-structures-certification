// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    let newArr = [];
    let mergedArr = arr1.concat(arr2);

    console.log(mergedArr);
    mergedArr.filter(element => {
        if ((arr1.includes(element) && !arr2.includes(element)) || (!arr1.includes(element) && arr2.includes(element))) {
            newArr.push(element);
        }
    });
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);