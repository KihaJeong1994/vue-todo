<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in this.$store.state.todoItems" :key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{todoItem}}
        <span class="editBtn" type="button" @click="editTodo(todoItem,index)">
          <i class="far fa-edit" aria-hidden="true"></i>
        </span>
        <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
    <editModal v-if="showEditModal" @close="showEditModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">편집</h3>
      <input slot="body" type="text"  v-model="chosenTodoItem">
      <i slot="body" class="checkBtn fas fa-check" aria-hidden="true" @click="[editComplete(chosenTodoItem,chosenIdx),showEditModal = false]"></i>
      <span slot="footer" @click="showEditModal = false">
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </editModal> 
  </section>

  
  
</template>

<script>
import EditModal from '../common/Modal.vue'
export default {
  // props:['propsdata'],
  data(){
    return {
      showEditModal:false,
      chosenTodoItem : '',
      chosenIdx : 0
    }
  },
  
  methods:{
    editTodo(todoItem,index){
      this.showEditModal = true;
      this.chosenTodoItem = todoItem;
      this.chosenIdx = index;
      console.log(index)
    },
    editComplete(todoItem,index){
      this.showEditModal = false;
      const editInfo = {'todoItem':todoItem,'index':index}
      this.$store.commit('editComplete',editInfo)
    },
    removeTodo(todoItem,index){
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index,1);
      const removeInfo = {'todoItem':todoItem,'index':index}
      this.$store.commit('removeTodo',removeInfo)
    }
  },
  components:{
    editModal:EditModal
  }

}
</script>

<style scoped>

ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.editBtn{
  margin-left: auto;
  margin-right: 5px;
  color: gray
}
.removeBtn{
  color: #de4343
}
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

</style>