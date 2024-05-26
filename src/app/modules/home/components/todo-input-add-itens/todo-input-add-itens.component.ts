import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public emiteFunc(): void {
    const trimmedAddItem: string = this.addItemTaskList.trim()
    if (trimmedAddItem){
      this.emitItemTaskList.emit(trimmedAddItem);
      this.addItemTaskList= "";
    }
  }

}
