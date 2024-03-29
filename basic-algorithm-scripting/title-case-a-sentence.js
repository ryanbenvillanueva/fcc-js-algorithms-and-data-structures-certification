// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// titleCase("I'm a little tea pot")should return a string.
// titleCase("I'm a little tea pot")should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt")should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")should return Here Is My Handle Here Is My Spout.

function titleCase(str) {
    let arr = str.toLowerCase().split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }

    return arr.join(" ");
}

titleCase("I'm a little tea pot");