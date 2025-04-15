<script setup>
import Wrapper from "@/components/Wrapper.vue";
import { useTodoStore } from "@/stores/todo";
import { computed, reactive, watch } from "vue";
import { useRouter } from "vue-router";
const todoStore = useTodoStore();

const router = useRouter();
const todo = reactive({
  title: "",
  priority: "",
});

const submit = () => {
  todoStore.addTodo(todo);
};

const isFormInvalid = computed(() => {
  return todo.title.trim() === "" || todo.priority.trim() === "";
});

watch(todoStore.todos, () => router.push({ name: "home" }));
</script>
<template>
  <Wrapper>
    <form @submit.prevent="submit">
      <h3>Create A New Todo</h3>
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" v-model="todo.title" />
      </div>
      <div>
        <label for="priority">Priority</label>
        <select name="" id="" v-model="todo.priority">
          <option value="Hight">Hight</option>
          <option value="Mid">Mid</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button type="submit" :disabled="isFormInvalid">Add</button>
    </form>
  </Wrapper>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    padding: 10px 0;
    font-weight: 300;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
  }
  input,
  select {
    border: 1px solid #adabab;
    padding: 10px;
    border-radius: 5px;
  }
  button {
    padding: 10px;
    background-color: #073ced;
    color: #fff;
    margin-top: 10px;
    border-radius: 10px;
  }
}
</style>
