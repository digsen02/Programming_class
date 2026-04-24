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
    
    function toggleTodo(id){
        setTodos((todos) => {
            return todos.map((todo) =>
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
            )
        })
    }

    function deleteTodo(id) {
        setTodos((todos) => {
            return todos.filter((todo) => todo.id !== id)
        })
    }
    
    function addTodo(text) {
        setTodos((todos) => [
            ...todos,
            new Todo(text)
        ])
    }

    

    function editTodo(id, newText) {
        setTodos((todos)=>
            todos.map((todo)=>
                todo.id === id ? {...todo, text: newText} : todo
            )
        )
    }


    return(
        <div className="todo">
            <TodoHeader/>

            <TodoAdder addTodo={addTodo} />

            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>

        </div>
    )
}

export default TodoListApp