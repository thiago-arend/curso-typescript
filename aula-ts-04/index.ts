import { log } from "console";

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    //const num1 = prompt("First Number");
    //const num2 = prompt("Second Number");

    const num1='1';
    const num2='2';

    if (num1 === null || num2 === null || isNaN(Number(num1)) || isNaN(Number(num2))) {
        console.log("É impossível realizar a operação!");
    } else {
        let result = sum(Number(num1),Number(num2));
        result += multiply(1,2);
        showResult(result);
    }
})();