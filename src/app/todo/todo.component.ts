import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todoList:string []=[];
  inputValue:string="";
  
  removeTodo(name:string){
   this.todoList=this.todoList.filter(val=>val!==name)
  }

  addTodo(){
    this.todoList.push(this.inputValue)
  }

  constructor() { }

  ngOnInit(): void {
    this.todoList=["Task 1","Task 2"]
  }

}
