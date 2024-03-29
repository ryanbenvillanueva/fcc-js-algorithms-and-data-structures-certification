// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Object.keys(bob).lengthshould return 6.
// bob instanceof Personshould return true.
// bob.firstNameshould return undefined.
// bob.lastNameshould return undefined.
// bob.getFirstName()should return "Bob".
// bob.getLastName()should return "Ross".
// bob.getFullName()should return "Bob Ross".
// bob.getFullName()should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName()should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName()should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName()should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName()should return "Curry" after bob.setFullName("Haskell Curry").

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    const arr = firstAndLast.split(" ");

    this.getFirstName = () => arr[0];
    this.getLastName = () => arr[1];
    this.getFullName = () => `${arr[0]} ${arr[1]}`;

    this.setFirstName = (first) => arr[0] = first;
    this.setLastName = (last) => arr[1] = last;
    this.setFullName = (firstAndLast) => {
        const array = firstAndLast.split(" ");
        this.setFirstName(array[0]);
        this.setLastName(array[1]);
    }
};

var bob = new Person('Bob Ross');