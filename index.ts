#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let Todos:string[]=[]
console.log(chalk.blueBright("                     ***** Welcome TO THE TO-DOs LIST *****"));
console.log(chalk.yellowBright("  Add the task first"));
let condition=true
while(condition == true){
let Operator = await inquirer.prompt([
    {message:"select one of the operator",type:"list",name:"operation",
    choices:["ADD","DELETE","VIEW","UPDATE"]}
])
//------------------------------------ADD-----------------------------------------------------
if(Operator.operation === "ADD"){
    let addTodo = await inquirer.prompt([
    {meassage:"add items in the list",type:"input",name:"select"}
    ])
    if(addTodo.select!==""){
        Todos.push(addTodo.select);
    console.log(Todos)}
    else{console.log(chalk.redBright("Please Enter Something"))}
}
//-----------------------------------DELETE------------------------------------------------------------
if(Operator.operation === "DELETE"){
let find_index=await inquirer.prompt([
    {message:"delete items in the list",type:"list",name:"select",choices:Todos} 
])  
let deleted_Items=Todos.indexOf(find_index.select)
if(deleted_Items>=0){
    Todos.splice(deleted_Items,1)
    console.log("you delete",find_index.select)
console.log(chalk.greenBright(Todos));
}
}
//------------------------------------VIEW--------------------------------------------------------------
if(Operator.operation === "VIEW"){
if(Todos.length === 0){
    console.log(chalk.yellowBright("**** LIST IS EMPTY ***"));}
    else{
    console.log(Todos);}
}
//-----------------------------------UPDATE-----------------------------------------------------------
if(Operator.operation === "UPDATE"){
console.log("Your updated list",Todos);

let program_continue=await inquirer.prompt([
    {message:"you want to continue",type:"confirm",name:"continue",default:false}
])
if (program_continue.continue===false){
    condition=false 
}
}
}
console.log(chalk.blueBright(Todos));
