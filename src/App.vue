<template>
  <div id="app">
    <TodoHeader/>
    <TodoFooter/>
    <TodoList/>
    <TodoInput/>
  </div>
</template>

<script>
import TodoHeader from './components/Header/TodoHeader.vue'
import TodoFooter from './components/Footer/TodoFooter.vue'
import TodoList from './components/List/TodoList.vue'
import TodoInput from './components/Input/TodoInput.vue'
export default {
  components : {
    "TodoHeader":TodoHeader,
    "TodoFooter":TodoFooter,
    "TodoList":TodoList,
    "TodoInput":TodoInput
  }
}
</script>

<style>
</style>
