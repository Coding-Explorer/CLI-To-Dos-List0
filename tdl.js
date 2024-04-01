import inquirer from "inquirer";
import chalk from "chalk";
//Heading:
console.log(chalk.bgRedBright.bold("\t WELCOME TO THE TODO LIST APP MADE BY RABAIL KHAN \t\n"));
let todos = [];
async function todosList(todos) {
    // Selection an action that you want to operate(Add ,update ,view ,delete).
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.bgBlue("Select the specific operation according to your interest :"),
            choices: ["add", "update", "view", "delete", "exit"],
        });
        // Add specific Todo's that you want to add.
        if (answer.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: chalk.bgCyan("Add an Item : "),
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        // Update Todo's that you want to update.
        if (answer.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: chalk.bgCyan("select an item for update :"),
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: chalk.bgGreenBright("Add an Item : "),
            });
            let newTodos = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (answer.select == "view") {
            console.log(todos);
        }
        if (answer.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: chalk.bgMagentaBright("select item for delete: "),
                choices: todos.map((item) => item),
            });
            let newTodos = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (answer.select == "exit") {
            console.log(chalk.bgYellowBright.bold("THANK YOU FOR USING THE APP!! HAVE A NICE DAY!!!."));
            break;
        }
        // If you want to exit the app.
    } while (true);
}
todosList(todos);
console.log("Good bye!!");
