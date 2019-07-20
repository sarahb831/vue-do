<template>
    <div>
    <md-card>
    <md-list>
        <md-field>
            <i class="material-icons">add</i>
            <md-input v-model="currentTodo"
                class="addTodo"
                @keydown.enter="addTodo()"
                placeholder="Add a todo"></md-input>
                <span class="md-helper-text">Add a todo</span>
                <span class="md-divider"></span>
        </md-field>
    </md-list>
            <span class="md-caption" v-show="todos.length">Click when completed</span>
            <ul class="todos">
                <li v-for="todo in todos" 
                    :class="{completed: todo.completed, editing: todo.id == editedTodoId}"
                    :key="todo.id">

                    <div v-show="editedTodoId != todo.id" class="todo-list">
                        <input  class="toggle-complete" type="checkbox" v-model="todo.completed">
                        <label @dblclick="editTodo(todo)">{{todo.label}}</label>
                        <button class="md-accent" @click="removeTodo(todo)">
                          <md-icon>delete<md-tooltip md-direction="right">delete todo</md-tooltip></md-icon></button>
                    </div>    
                    <md-input v-show="editedTodoId == todo.id" 
                        v-focus="editedTodoId == todo.id"
                        :class="{editing: todo.id == editedTodoId}"
                        v-model="todo.label"
                        @blur="updateTodo(todo)"
                        placeholder="Edit a todo label"></md-input>
                </li>
            </ul>
            <span class="md-caption">Double-click on todo item to edit it</span>
    </md-card>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid';

export default {
    data() {
        return {
            todos: [],
            currentTodo: '',
            editedTodoId: null
        };
    },
    mounted() {
        if (localStorage.getItem('todos')) {
            try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
            } catch(e) {
                localStorage.removeItem('todos');
            }
        }
    },
    methods: {
        addTodo() {
            this.todos.push({id: uuid.v1(),
                label: this.currentTodo,
                completed: false });

            this.saveTodos();
            this.currentTodo='';
        },
        saveTodos() {
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem('todos', parsed);
        },
        removeTodo(todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
            this.saveTodos();
        },
        editTodo(todo) {
            this.editedTodoId = todo.id;
        },
        updateTodo(todo) {
            var index = this.todos.indexOf(todo);
            this.todos[index].label = todo.label;
            this.editedTodoId=null;
            this.saveTodos();
        },
        toggleCompleted(todo) {
            var index = this.todos.indexOf(todo);
            this.todos[index].completed = !this.todos[index].completed;
            this.saveTodos();
        }
    },
    directives: {
        focus: el =>{
            el.focus();
        },
        clickOutside: {    
            bind(el, binding, vnode) {
                var vm=vnode.context;
                var callback=binding.value;

                el.clickOutsideEvent= event => {
                    if (!(el == event.target || el.contains(event.target))) {
                        return callback.call(vm, event);
                    }
                };
                document.body.addEventListener('click', el.clickOutsideEvent);
            },
            unbind(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent);
            }
        }
    }
};
</script>

<style>

template, span, button {
    margin-left: 30px;
}

.toggle-complete {
  margin-right: 10px;
}

.addTodo {
  color: blue;
}

md-field {
  margin-left: 30px;
}

li {
    list-style-type: none;
}

/* .todos {
    display: block;
    color: red;
}
*/
.editing {
   color: blue;
}

.completed {
    text-decoration: line-through;
    color: purple;
}
</style>

