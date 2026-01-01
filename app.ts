// let num1= 5;

// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }

// console.log(calculate(num1,3));

// 2
// function getTotal(numbers:Array<number>): number {
//     return numbers.reduce((acc, item) => {
//         return acc + item;
//     }, 0);
// }

// console.log(getTotal([1, 2, 3]));

//3
// const user = {
//     fristName: 'Meet',
//     lastName: 'Patel',
//     role: 'Admin',
// };

// console.log(user);


// Type alias
// type User = {
//     name: string;
//     age: number;
//     address?: string;
// }

// const user : User = {
//     name: 'Meet',
//     age: 23,
    
// };

// function login(userData: User) {
//     return userData;
// }


// const user  = {
//     name: 'Meet',
//     age: 23,
    
// };


// console.log(login(user));


//Customtype alias
// type ID = string | number;
// const userId: ID = 1234;



//Interfaces
interface Trasaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolderName: string;
    balance: number;
    isActive: boolean;
    transactions: Trasaction[];
}
const transactions1: Trasaction = {
    payerAccountNumber: 123456,
    payeeAccountNumber: 789012
}
const transactions2: Trasaction = {
    payerAccountNumber: 345678,
    payeeAccountNumber: 901234
}

const bankAccount: BankAccount = {
    accountNumber: 123456,
    accountHolderName: "Meet Patel",
    balance: 1000,
    isActive: true,
    transactions: [
        transactions1,
        transactions2
    ]
}