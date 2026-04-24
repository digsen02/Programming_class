import { useState } from 'react'

import CheckBox from '../components/CheckBox.jsx'
import Button from '../components/Button.jsx'

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText,setEditText] = useState(todo.text);

    function handleEditClick(){
        if(!isEditing){
            setIsEditing(true);
            setEditText(todo.text);
        } else {
            const trimmedText = editText.trim();
            if (trimmedText) {
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);
        }
    }

    return (
        // todo.isCompleted가 참이면 "tidi__item--complete" 아니면 ""
        <li className={`todo__item ${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/* 수정 중이 아니면 */}
            {!isEditing &&
                <CheckBox
                    id={`${todo.id}`}
                    onChange={() => toggleTodo(todo.id)}
                >{todo.text}</CheckBox>
            }
            {/* 수정중이면 */}
            {isEditing &&
                <input
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    onKeyDown={(event)=> {
                        if(event.key === 'Enter'){
                            handleEditClick();
                        }
                    }}
                    autoFocus
                />
            }
            <Button
                className="todo__button todo__button--edit"
                onClick={handleEditClick}
            >{isEditing ? "💾" : "✏️"}</Button>

            <Button className="todo__button todo__button--delete"
            onClick={() => deleteTodo(todo.id)}>❌</Button>
        </li>
    )
}   