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
  <div class="text-black">
    <h1 className="text-2xl font-bold text-black">Todos</h1>
    <div v-for="todo in todos" :key="todo.id" class="todo-container">
      <div class="todo bg-gray-100 p-4 rounded-md">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.description }}</p>
      </div>
      <div class="comments bg-gray-100 p-4 rounded-md mt-4">
        <h4>Comments:</h4>
        <div v-for="comment in comments" :key="comment.id" class="comment">
            <p>{{ comment.content }}</p>
            <p>{{ comment.author.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
