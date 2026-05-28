import TodoItem from "./TodoItem.jsx";
import TodoItemEmpty from "./TodoItemEmpty.jsx";

export default function TodoList({ todos, ...rest }) {
    return (
        <ul className="todo__list">
            {/* todos가 비어있을 때 */}
            { todos.length === 0 && <TodoItemEmpty /> }
            {/* 값이 있을 때 */}
            { todos.length > 0 && todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} {...rest}/>
            ) }
            
        </ul>
    )
}