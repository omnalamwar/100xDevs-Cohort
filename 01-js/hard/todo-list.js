/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(task){
    this.tasks = [];
    this.tasks.push(task);  
  }
  add(todo){
    this.tasks.push(todo);
  }
  remove(indexOfTodo){
    this.tasks.filter((item, index)=>{
      if(indexOfTodo != index)  return item;
    });
  }
  update(index, updatedTodo){
    this.tasks[index] = updatedTodo;
  }
  getAll(){
    return this.tasks;
  }
  get(indexOfTodo){
    return this.tasks.indexOf(indexOfTodo);
  }
  clear(){
    this.tasks.clear();
  }
}

module.exports = Todo;
