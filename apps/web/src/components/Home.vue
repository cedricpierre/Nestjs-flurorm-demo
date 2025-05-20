<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue'
import { Todo } from '../models/Todo'
import { CreateTodoDto } from '@api/todos/dto/create-todo.dto'
const todos = ref([])

onMounted(async () => {
  await fetchTodos()
})

const updateTodo = async (todo: Todo) => {
  await todo.save()
}

const deleteTodo = async (todo: Todo) => {
  todos.value = todos.value.filter((t: Todo) => t.id !== todo.id)
  await todo.delete()

}

const createTodo = async () => {
  const newTodo = new CreateTodoDto()
  newTodo.title = 'Todo'
  newTodo.description = 'New Description'
  newTodo.completed = false

  await Todo.create(newTodo)

  todos.value.push(newTodo)
}

const fetchTodos = async () => {
  todos.value = await Todo.all()
}
</script>

<template>  
<div>
  <div class="flex flex-row justify-end border-b border-gray-200 pb-4">
    <button class="bg-blue-500 text-white p-2 rounded-md" @click="createTodo">Create</button>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4"> 
    <div class="flex flex-col justify-between bg-white border border-gray-300 shadow-md p-4 rounded aspect-4/3" v-for="todo in todos" :key="todo.id">
      <div class="flex flex-col gap-2 justify-start flex-1">
        <div class="flex flex-row gap-2">
          <span class="text-2xl font-bold">
            {{ todo.id }}
          </span>
          <input class="text-2xl font-bold" type="text" v-model="todo.title" />
        </div>
        <textarea class="flex-1" v-model="todo.description" />
        <label>
          <input type="checkbox" v-model="todo.completed" />
          Completed
        </label>
      </div>
      <div class="flex flex-row gap-2 justify-between border-t border-gray-200 pt-4 mt-4">
        <button class="bg-red-500 text-white p-2 rounded-md" @click="deleteTodo(todo)">Delete</button>
        <button class="bg-green-500 text-white p-2 rounded-md" @click="updateTodo(todo)">Save</button>
      </div>
    </div>
  </div>
</div>
</template>