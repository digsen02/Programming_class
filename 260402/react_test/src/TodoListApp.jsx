function TodoListApp() {


    return(
        <div>
            <h1>HyeonDo List</h1>
            <form>
                <input type="text" name="" id="" />
                <button type="submit">Add</button>
            </form>

            <ul>
                <li>
                    <input type="checkBox" name="" id="chk-1" />
                    <label htmlFor="chk-1">지각하기</label>
                    <button>R</button>
                    <button>D</button>
                </li>
                <li>
                    <input type="checkBox" name="" id="chk-2" />
                    <label htmlFor="chk-2">롤체 in dawn</label>
                    <button>R</button>
                    <button>D</button>
                </li>
                <li>
                    <input type="checkBox" name="" id="" />
                    <label htmlFor="">지각하기</label>
                    <button>R</button>
                    <button>D</button>
                </li>
            </ul>



        </div>
    )
}

export default TodoListApp