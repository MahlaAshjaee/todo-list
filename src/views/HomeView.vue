<script setup>
import TodoItem from "@/components/TodoItem.vue";
import Wrapper from "@/components/Wrapper.vue";
import { useTodoStore } from "@/stores/todo";
import { ref } from "vue";

const todoStore = useTodoStore();
const todoFilter = ref("all");

const setTodoFilter = () => {
  todoFilter.value = todoFilter.value == "all" ? "done" : "all";
};
</script>
<template>
  <div class="header">
    <div>
      <h3>{{ todoFilter == "all" ? "All Todo" : "Done Todo" }} ({{ todoStore.todoCount }})</h3>
    </div>
    <button @click="setTodoFilter">
      {{ todoFilter == "all" ? "show Done Todo" : "Show All Todo" }}
    </button>
  </div>
  <div v-if="todoFilter == 'all'">
    <div v-for="todo in todoStore.sorted" :key="todo.id">
      <Wrapper>
        <TodoItem :todo="todo" />
      </Wrapper>
    </div>
  </div>
  <div v-if="todoFilter == 'done'">
    <div v-for="todo in todoStore.done" :key="todo.id">
      <Wrapper>
        <TodoItem :todo="todo" />
      </Wrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    color: #fff;
    background-color: #1e40af;
    padding: 5px 15px;
    border-radius: 5px;
    &:hover {
      background-color: #0ea5e9;
    }
  }
}
</style>
