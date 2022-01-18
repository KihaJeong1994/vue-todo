import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
              arr.push(localStorage.key(i))
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state:{
        todoItems : storage.fetch()
    },
    mutations:{
        addTodo(state,todoItem){
            localStorage.setItem(todoItem,todoItem);
            state.todoItems.push(todoItem);
        },
        clearTodo(state){
            localStorage.clear();
            state.todoItems = [];
        },
        removeTodo(state,removeInfo){
            localStorage.removeItem(removeInfo.todoItem);
            state.todoItems.splice(removeInfo.index,1);
        },
        editComplete(state,editInfo){
            localStorage.removeItem(state.todoItems[editInfo.index]);
            localStorage.setItem(editInfo.todoItem,editInfo.todoItem);
            state.todoItems[editInfo.index] = editInfo.todoItem;
        }
    }
})