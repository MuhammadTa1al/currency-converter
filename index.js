#! /usr/bin/env node
import inquirer from 'inquirer';
const rate = {
    USD: 1,
    EUR: 0.91,
    GEP: 0.76,
    INR: 74.5,
    PKR: 280,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "which currency you want from convert",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "which currency you want to convert",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter a amount",
        type: "number"
    },
]);
let fromCurrency = rate[answer.from];
let toCurrency = rate[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromCurrency;
let convertedValue = baseAmount * toCurrency;
console.log(convertedValue);
