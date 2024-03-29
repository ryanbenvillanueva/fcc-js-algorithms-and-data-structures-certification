// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// steamrollArray([[["a"]], [["b"]]])should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]])should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]])should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]])should return [1, {}, 3, 4].

function steamrollArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}
    
steamrollArray([1, [2], [3, [[4]]]]);