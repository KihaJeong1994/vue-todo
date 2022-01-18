<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput/>
    <TodoList v-bind:propsdata="todoItems"/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/Header/TodoHeader.vue'
import TodoFooter from './components/Footer/TodoFooter.vue'
import TodoList from './components/List/TodoList.vue'
import TodoInput from './components/Input/TodoInput.vue'
export default {
  data(){
    return{
      todoItems:[]
    }
  },
  methods:{
    // addTodo(todoItem){
    //   localStorage.setItem(todoItem,todoItem);
    //   this.todoItems.push(todoItem);
    // },
    // clearTodo(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
    // removeTodo(todoItem,index){
    //   localStorage.removeItem(todoItem);
    //   this.todoItems.splice(index,1);
    // },
    // editComplete(todoItem,index){
    //   localStorage.setItem(this.todoItems[index],todoItem);
    //   this.todoItems[index] = todoItem;
    // }
  },
  
  components : {
    "TodoHeader":TodoHeader,
    "TodoFooter":TodoFooter,
    "TodoList":TodoList,
    "TodoInput":TodoInput
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f8;
}
input{
  border-style: groove; /** 테두리 모양 */
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); /** 아래 그림자 */
}

</style>
