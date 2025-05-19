<script setup lang="ts">
import { ref, onMounted, toRaw } from '@vue/runtime-core'
import { Todo } from '../models/Todo'
import { Comment } from '../models/Comment'

const todos = ref<Todo[]>([])
const comments = ref<Comment[]>([])

defineExpose({
  todos,
  comments
})

onMounted(async () => {
  // fetch all todos
  todos.value = await Todo.all()
  // fetch all comments for the first todo, convert to raw object to expose the methods from the model and not the reactive proxy
  const todo = toRaw(todos.value[0])
  // fetch all comments for the first todo
  comments.value = await todo.comments.all()
})
</script>
<template>
  <div>
    <h1>Home</h1>
    {{ todos }}
    {{ comments }}
  </div>
</template>
