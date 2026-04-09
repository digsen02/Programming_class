//https://programming.dlgusdnse2008.workers.dev/

import { useState } from 'react'

function CounterApp() {
  //count: 상태 값, 이전 상태값; set Count: 상태를 업데이트하는 함수. 반드시 얘로 바꿔야함 (직접 count = 1 이런식으로 바꾸면 안됨)
  const [count, setCount] = useState(0)
  function plusMax10(){
    setCount((count)=>{
      if (count >= 10) return 10;
      return count +1;
    })
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count) => count +1)}>+</button>
      <button onClick={()=>setCount((count) => count +2)}>+2</button>
      <button onClick={()=>setCount((count) => count -1)}>-</button>  
      <button onClick={()=>setCount(0)}>reset</button>  
      <button onClick={()=>setCount((count) => count >= 10 ? 10 : count +1 )}>+(최대 10까지)</button>  
      <button onClick={()=>setCount((count) => Math.min(count + 1, 10) )}>+(최대 10까지)</button>
      <button onClick={()=>plusMax10()}>+(최대 10까지)</button>
      <button onClick={plusMax10}>+(최대 10까지)</button>


    </>
  )
}

export default CounterApp