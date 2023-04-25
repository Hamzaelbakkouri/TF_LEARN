import React, { useState } from 'react'
import UserBar from '../../components/UserBar';


const Syntaxe_example = () => {
  const [data, setData] = useState();

  return (
    <div>
      <UserBar/>
      <div>
        {data.map((item) => {
          <div key={item.id}>
            hamza
          </div>
        })}
      </div>
    </div>
  )
}

export default Syntaxe_example
