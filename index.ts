#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";
console.log(chalk.bgBlueBright("calculator"))
let str : string = 'Yes';

while (str == 'Yes') {
    

    let user = await inquirer.prompt([
        
            {
                type: 'number',
                name: "number1",
                message: chalk.green('Enter Number1')
            },
            {
                type: 'number',
                name: "number2",
                message: chalk.greenBright('Enter Number2')
            },
            {
                type: 'list',
                name: "sign",
                message: chalk.green('Enter Maths operation'),
                choices: ['Add','Subtract','Multiply','Division']
            }
            
            ])
            

            let result = 0;

            if (user.sign === "Add"){
                result = user.number1 + user.number2;
            } else if (user.sign === "Subtract"){
                result = user.number1 - user.number2;
            } else if (user.sign === "Multiply"){
                result = user.number1 * user.number2;
            } else if (user.sign === "Division"){
                result = user.number1 / user.number2;
            } else {result = 0;}
            console.log(chalk.whiteBright(`Result = ${result}`));
    
  
            let user1 = await inquirer.prompt(
                {
                    type: 'list',
                    name: "Redo",
                    message: chalk.bgGray.redBright.italic('Do you wish to perform another calculation?'),
                    choices: ['Yes','No']
                }
            )

            str = (<string>user1.Redo);

        } 
  
console.log("Calculator Terminated")