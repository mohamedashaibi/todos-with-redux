import { useSelector } from 'react-redux'
import {Todo} from './Todo'

const TodoList = () => {
    const todos = useSelector(state=>state.reducer.todos)

    return <div className="todo-list">
        {todos.map((item, index)=><Todo item={item} index={index} key={index}/>)}
    </div>
}

export default TodoList