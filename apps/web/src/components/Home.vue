<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Todo } from '../models/Todo'
const todos = ref()

onMounted(async () => {
  todos.value = await Todo.all()
  console.log(todos.value)
})
</script>
<template>
  <div>
    <h1>Home</h1>
    {{ todos }}
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
