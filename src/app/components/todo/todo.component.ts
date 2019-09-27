import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo, TodosStore} from "../../store/todos-store";
import {fromMobx} from "../../store/getters";
import {TodosFilter, TodosFilterStore} from "../../store/todos-filter-store";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  todo: Todo;
  todos: Todo[];

  constructor( private _todosStore : TodosStore,
               private _todosFilterStore: TodosFilterStore ) {
  }


  ngOnInit() {
    fromMobx(() => this._todosStore.filteredTodos)
      .subscribe((todos) => this.todos = todos);
  }

  addTodo() {
    this._todosStore.addTodo({title: `Todo ${Math.random()}`});
  }

  complete(todo: Todo) {
    this._todosStore.toggleComplete(todo);
  }

  setFilter(filter: TodosFilter) {
    this._todosFilterStore.setFilter(filter);
  }

  checkAll() {
    this._todosStore.checkAll();
  }


  unCheckAll() {
    this._todosStore.unCheckAll();
  }
}

