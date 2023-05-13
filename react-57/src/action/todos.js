export const ADD_TODO='ADD_TODO'
export const EDIT_TODO='EDIT_TODO'
export const DELETE_TODO='EDIT_TODO'


export function addTodo(todo){
    return {
        type:'ADD_TODO',
        todo:todo
    }
    
}