import { useState } from 'react'    
import Button from './Button.jsx'

export default function TodoAdder({addTodo}) {
    const [inputTodo, setInputTodo] = useState('');


    function handleSubmit(event) {
        event.preventDefault(); //submit 이벤트의 기본 동작인 새로고침 방지
        
        if(inputTodo.trim() === '') return; //공백만 입력한 경우 추가하지 않음

        console.log('Adding todo:', inputTodo.trim()); // 디버깅용 로그 추가
        addTodo(inputTodo.trim()); //부모 컴포넌트로부터 전달받은 addTodo 함수 호출하여 새로운 할 일 추가
        setInputTodo('');
    }

    return (
        <>
        ``
            <form className="todo__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="todo__input"
                    placeholder='할 일을 입력하세요.'
                    value={inputTodo}
                    onChange={(event) => setInputTodo(event.target.value)}
                />
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>
        </>
    )
}