import React, { useState } from 'react'
import ComponentB from './ComponentB'

export const ClickContext = React.createContext();

function ComponentA() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      Component A - {count}
      <ClickContext.Provider value={tick}>
        <ComponentB />
      </ClickContext.Provider>
    </div>
  )
}

export default ComponentA
