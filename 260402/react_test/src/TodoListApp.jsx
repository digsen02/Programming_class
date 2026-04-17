import { useState } from 'react'

import './todoListApp.css'
import TodoHeader from '../components/TodoHeader.jsx'
import TodoAdder from '../components/TodoAdder.jsx'
import TodoList from '../components/TodoList.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now() //pk
        this.text = text //할일 내용
        this.isCompleted = false //완료 여부
    }
}

function TodoListApp() {
    const[todos, setTodos] = useState([])
    
    function addTodo(text) {
        setTodos((todos) => [
            ...todos,
            new Todo(text)
        ])
    }

    return(
        <div className="todo">
            <TodoHeader/>

            <TodoAdder addTodo={addTodo} />

            <TodoList/>

        </div>
    )
}

export default TodoListApp