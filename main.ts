import inquirer from "inquirer";

//initialize user balance and pin code
let myBalance = 5000;
let myPin = 4725;

// print welcome msg
console.log("welcome to ATM MAchine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin",
    }
])
if(pinAnswer.pin === myPin) {
    console.log("Congtarulations! , Pin is correct,Login successfully")
    console.log(`current Account balance is: ${myBalance}`)

let opeartionAnswer = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "select an operation:",
        choices: ["withDraw amount", "check balance"]
    }
])

if(opeartionAnswer.operation === "withDraw amount") {
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter the amount to withdraw"
        }
    ])

if( amountAnswer.amount > myBalance) {
    console.log( "Sorry!, Your Balance is Insufficient");
}
else{
    myBalance -= amountAnswer.amount;
    console.log(`${amountAnswer.amount} withdraw Successfully`);
    console.log(`your remaining balance is: ${myBalance}`);
}
}
}
