
import inquirer from "inquirer"

let todos = [];
let condition = true;




while(condition){
let addTask = await inquirer.prompt(
[
{
name:"todo",
type: "input",
message: "WHAT YOU WANT TO ADD IN YOUR TODOS "
},

{
    name:"ADDMORE",
    type:'confirm',
     message: "DO YOU WANT TO ADD MORE",
     default: "false"
}
]
)

todos.push(addTask.todo);
condition = addTask.ADDMORE;

console.log(addTask.todo);



}