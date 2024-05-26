import { Component } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]");

  ngDoCheck() {
    this.setLocalStorage();
  }

  public deleteTask(i:number) {
    this.taskList.splice(i, 1);
  }

  public deleteAllTasks() {
    const confirm = window.confirm("Você realmente deseja deletar tudo?")
    if (confirm){
      this.taskList = [];
    }
  }

  public addTask(event: string): void{
    this.taskList.push({task: event, checked: false});
  };

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?");
      if(confirm){
        this.taskList.splice(index, 1);
      }
    }
  }

  public setLocalStorage(){
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList)); 
    }
  }
}
