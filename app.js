// let num1= 5;

// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }

// console.log(calculate(num1,3));


function gettTotal(numbers) {
    return numbers.reduce((acc, curr) => {
        return acc + item;
    }, 0);
}

console.log(gettTotal([1, 2, 3]));