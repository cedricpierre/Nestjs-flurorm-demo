<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue'
import { Todo } from '../models/Todo'

const todos = ref([])

const selectedTodo = ref(null)

onMounted(async () => {
  await fetchTodos()
})

const editTodo = (todo: Todo) => {
  todo.save()
}

const createTodo = async () => {
  const newTodo = await new Todo({
    title: 'New Todo',
    description: 'New Description',
    completed: false
  }).save()

  todos.value.push(newTodo)
}

const fetchTodos = async () => {
  todos.value = await Todo.all()
}
</script>

<template>  
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4"> 
    <div class="flex flex-col justify-between bg-white border border-gray-300 shadow-md p-4 rounded aspect-4/3" v-for="todo in todos" :key="todo.id">
      <div class="flex flex-col gap-2 justify-start flex-1">
          <input class="text-2xl font-bold focus:p-2" type="text" v-model="todo.title" />
          <textarea class="flex-1 focus:p-2" v-model="todo.description" />
          <label>
            <input type="checkbox" v-model="todo.completed" />
            Completed
          </label>
      </div>
      <div class="flex flex-row gap-2 justify-end border-t border-gray-200 pt-4 mt-4">
        <button class="bg-blue-500 text-white p-2 rounded-md" @click="editTodo(todo)">Edit</button>
        <button class="bg-red-500 text-white p-2 rounded-md" @click="deleteTodo(todo)">Delete</button>
      </div>
    </div>
  </div>
</template>