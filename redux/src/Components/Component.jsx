import React,{useState} from 'react'

export const Component = () => {
    const [count, setCount] = useState(0)
  return (
          <>
            <h1>COUNTER</h1>
            <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
            </button>
          </>
        )
      }
  
