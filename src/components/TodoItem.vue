<script setup>
import { useTodoStore } from "@/stores/todo";

defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const todoStore = useTodoStore();
</script>
<template>
  <div class="content">
    <div class="header">
      <span>data:{{ todo.createdAt }}</span>
      <div class="action">
        <button class="material-symbols-outlined del" @click="todoStore.deleteTodo(todo.id)">
          delete
        </button>
        <label class="container">
          {{ todo.done ? "Done" : "Pendinp" }}
          <input type="checkbox" :checked="todo.done" @input="todoStore.updateTodo(todo.id)" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.priority }}</p>
  </div>
</template>

<style lang="scss" scoped>
.content {
  border: 1px solid #0284c7;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.header {
  font-size: 12px;
  background-color: #0284c7;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 300;
  button {
    border-radius: 30px;
  }
  .action {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  div .del {
    font-size: 20px;
    padding: 3px;
    background-color: #fff;
    color: #ef4444;
  }
}
h1 {
  padding: 10px;
}
p {
  padding: 8px;
  font-weight: 300;
  background-color: #0284c7;
  width: 80px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
}
</style>
