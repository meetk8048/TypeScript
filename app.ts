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


//***********/ Type alias
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
// interface Trasaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolderName: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Trasaction[];
// }
// const transactions1: Trasaction = {
//     payerAccountNumber: 123456,
//     payeeAccountNumber: 789012
// }
// const transactions2: Trasaction = {
//     payerAccountNumber: 345678,
//     payeeAccountNumber: 901234
// }

// const bankAccount: BankAccount = {
//     accountNumber: 123456,
//     accountHolderName: "Meet Patel",
//     balance: 1000,
//     isActive: true,
//     transactions: [
//         transactions1,
//         transactions2
//     ]
// }

                    //Extending interfaces
// interface Book {
//     name: string;
//     price: number;
// }

// interface EBook extends Book {
//     // name: string;
//     // price: number;
//     fileSize: number;
//     format: string;
// }

// interface AudioBook  extends EBook{
//     // name: string;
//     // price: number;
//     // fileSize: number;
//     // format: string;
//     duration: number;
// }

// const book: AudioBook = {
//     name: 'The Great Gatsby',
//     price: 1200,
//     fileSize: 1024,
//     format: 'PDF',
//     duration: 5,
// };


//********************marging interfaces
// interface Book{
//     name: string;
//     price: number;
// }
// interface Book {
//     size: number;
// }

// const book: Book = {
//     name: 'The Great Gatsby',
//     price: 1200,
//     size: 300,
// }

// type Book = {
//     name: string;
//     price: number;
// }
// type Book = {
//     size: number;
// }

// type SanitizedString = string;
// type EvenNumber = number;

//**********Unions
// type ID = string | number;
// function printId(id: ID) {
//     //********Narrowing
//     if (typeof id === "string") {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }

// printId(123);
// printId("ABC123");

// function getFristThree(x: string | number[] ) {
//     return x.slice(0, 3);
// }

// console.log(getFristThree("HelloWorld"));
// console.log(getFristThree([1, 2, 3, 4, 5]));

//**********Generics
// function logString(arg: string){
//     console.log(arg);
//     return arg;
// }
// function logNumber(arg: number) {
//     console.log(arg);
//     return arg;
// }
// function logArray(arg: any[]) {
//     console.log(arg);
//     return arg;
// }
// logString("Hello TypeScript");
// logNumber(12345);
// logArray([1, 2, 3, 4, 5]);

//**********Generic function Code
// function logAnything<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// }
// logAnything("Hello Generics");

// interface HasAge {
//     age: number;
// }
// function getOldest<T extends HasAge>(people :T[]): T {
//     return people.sort((a, b) => b.age - a.age)[0];
// }
// const people = [{ age: 30 }, { age: 25 }, { age: 35 }];

// interface Player {
//     name: string;
//     age: number;
// }
// const players = [
//     { name: 'Alice', age: 28 },
//     { name: 'Bob', age: 34 },
//     { name: 'Charlie', age: 22 },
// ]

// const person = getOldest(people);
//**********Generics with interfaces
// person.age;


//********Real project example
// interface IPost {
//     title: string;
//     id: number;
//     description: string;
// }
// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
//     return response.json();
// }
// const fetchUserData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
//     return response.json();
// }
//********Generic Function
// const fetchData = async <ResultType>(path: string): Promise<ResultType[]> => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
//     return response.json();
// }

// (async() => {
//     const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IPost>('/posts');
//     posts[0].
// })();

//**********Structural typing/ Duck Typing
// interface Icreadential{
//     username: string;
//     password: string;
//     isAdmin?: boolean;
// }
// function login(credentials: Icreadential): boolean {
//     console.log(credentials);
//     return true;
// }
// const user = {
//     username: 'meet',
//     password: '12345',
//     isAdmin: true,
// }
// login(user);

//*********
interface IAuth {
    username: string;
    password: string;
    login(username: string, password: string): void;
}

const auth: IAuth = {
    username: 'meet',
    password: '12345',
    login(username: string, password: string) { 
        return true;
    }

}