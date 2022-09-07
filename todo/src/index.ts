import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";

let todos = [new TodoItem(1,"Buy Flowers"),new TodoItem(2,"Get Shoes"),new TodoItem(3,"Collect Tickets"),new TodoItem(4,"Call Joe",true)];
let collection = new TodoCollection("Adam",todos);
console.clear();
console.log(`${collection.userName}'s todo list`);

let newId = collection.addTodo("Go For Run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();