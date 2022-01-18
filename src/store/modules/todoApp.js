import * as getters from '../getters'
import * as mutations from '../mutations'

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

const state = {
    todoItems : storage.fetch()
}


export default{
    state,
    getters,
    mutations
}