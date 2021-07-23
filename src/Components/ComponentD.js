import React, { useContext } from 'react'
import { ClickContext } from './ComponentA';

function ComponentD() {
  const ClickContextObj = useContext(ClickContext);
  return (
    <div>
      Component D
      <button onClick={ClickContextObj}>Increase Count</button>
    </div>
  )
}

export default  ComponentD
