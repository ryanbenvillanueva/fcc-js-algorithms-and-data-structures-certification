// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate prewill be an object property and you need to return trueif its value is truthy. Otherwise, return false.

// In JavaScript, truthyvalues are values that translate to truewhen evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or []notation.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")should return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")should return true
// truthCheck([{"single": "yes"}], "single")should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single")should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single")should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single")should return false

function truthCheck(collection, pre) {
    // Is everyone being true?
    let truthCounter = 0;

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
            truthCounter++;
        } 
    }
    return truthCounter === collection.length;
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");