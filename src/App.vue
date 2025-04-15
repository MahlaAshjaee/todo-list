<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useTodoStore } from "./stores/todo";

const todoStor = useTodoStore();
todoStor.getTodo();
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/newTodo" class="nav-link">New Todo</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  background-color: #1e40af;
  border-bottom: 1px solid #60a5fa;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    .nav-link {
      color: #fff;
      padding: 5px 15px;
      border-radius: 5px;
      margin-right: 1rem;
      &:hover {
        background: #60a5fa;
      }
    }
  }
}
</style>
