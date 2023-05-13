import React from 'react'

export const Users = (props) => {
    console.log(props.user);
  return (
    <div>
        USER component
        <p>{props.payload}</p>
        <p>{props.user.name}</p>
        <p>{props.user.age}</p>

        <button onClick={props.test}>Click me 2</button>
    </div>
  )
}
