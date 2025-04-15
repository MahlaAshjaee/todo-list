import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo-stor", {
  state() {
    return {
      todos: [],
      loading: true,
      errMeg: "",
    };
  },

  getters: {
    sorted: (state) => {
      return state.todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    done: (state) => state.todos.filter((todo) => todo.done),
    todoCount() {
      return this.todos.length;
    },
  },
  actions: {
    getTodo() {
      fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then((data) => {
          this.todos = data;
          this.loading = false;
        })
        .catch((e) => {
          this.errMeg = "error";
          this.loading = false;
          console.log(e);
        });
    },

    addTodo(todos) {
      const NewTodo = {
        id: (+new Date()).toString(),
        title: todos.title,
        priority: todos.priority,
        createdAt: new Date().toLocaleDateString(),
        done: false,
      };
      this.todos.push(NewTodo);

      fetch("http://localhost:3000/todos", { method: "POST", body: JSON.stringify(NewTodo) }).catch(
        (e) => console.log(e),
      );
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
      fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" }).catch((e) => console.log(e));
    },

    updateTodo(id) {
      const todo = this.todos.find((t) => t.id == id);
      todo.done = !todo.done;

      fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ done: todo.done }),
      }).catch((e) => console.log(e));
    },
  },
});
