import React from 'react'


function List({items}) {
  return (
    <ul className="todo_list">
      {
        items.map((obj) => (
          <li className="active">
            <i>{obj.icon ? obj.icon : <i className={`badge badge--${obj.color}`}></i>}
            </i>
            <span>{obj.name}</span>
          </li>

        ))
     }
    </ul>
  )
}

export default List
