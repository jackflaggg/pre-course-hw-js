function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
        debugger;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(4));

let human = {
    name: 'Rasul',
};

console.log(human.age);

