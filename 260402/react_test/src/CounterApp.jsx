import { useState } from 'react'

function CounterApp() {
  //count: 상태 값, 이전 상태값; set Count: 상태를 업데이트하는 함수. 반드시 얘로 바꿔야함 (직접 count = 1 이런식으로 바꾸면 안됨)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count) => count +1)}>+</button>
      <button onClick={()=>setCount((count) => count +2)}>+2</button>
      <button onClick={()=>setCount((count) => count -1)}>-</button>
    {
    // <button
    //   className='counter'
    //   onClick={()=>setCount((count) => count +1)}
    // >
    //   Count is {count}
    // </button>
    }
    </>
  )
}

export default CounterApp