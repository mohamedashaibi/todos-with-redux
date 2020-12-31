import {ADD, DONE, EDIT} from '../Actions/action-types'
const initialState = {
    todos:[
        {
            id: Math.random(),
            description: "Go to school",
            isDone: false
        },
        {
            id: Math.random(),
            description: "Go to school",
            isDone: false
        },
        {
            id: Math.random(),
            description: "Go to school",
            isDone: false
        }
    ]
}

export const rootReducer = (state=initialState, action) => {
    const todo = {
        id: Math.random(),
        description: "Go to school",
        isDone: false
    }
    const{type, payload}=action
    switch(type){
        case ADD:
            return(
                {
                    todos: state.todos.concat({id: Math.random(),description: payload, isDone: false}) 
                }
            )
        case EDIT: return(
            {
                todos: state.todos.map((item) => item.id === payload.id?{...item, description:payload.description}:item)   
            }
        )
        case DONE: return(
            {
                todos: state.todos.map((item)=>payload === item.id?{...item, isDone: !item.isDone}:item)
            }
        )
        default:
            return state;
    }
}