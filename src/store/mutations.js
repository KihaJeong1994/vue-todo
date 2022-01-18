const addTodo = (state,todoItem)=>{
    localStorage.setItem(todoItem,todoItem);
    state.todoItems.push(todoItem);
}
const clearTodo=(state) => {
    localStorage.clear();
    state.todoItems = [];
}
const removeTodo=(state,removeInfo)=> {
    localStorage.removeItem(removeInfo.todoItem);
    state.todoItems.splice(removeInfo.index,1);
}
const editComplete=(state,editInfo)=> {
    localStorage.removeItem(state.todoItems[editInfo.index]);
    localStorage.setItem(editInfo.todoItem,editInfo.todoItem);
    state.todoItems[editInfo.index] = editInfo.todoItem;
}

export {addTodo,clearTodo,removeTodo,editComplete}