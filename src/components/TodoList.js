import React from 'react'

const TodoList = () => {
  const todoList = [
    { id: 23452345, title: "title1", body: "body1" },
    { id: 13452345, title: "title2", body: "body2" },
    { id: 19460302, title: "title3", body: "body3" },
  ];

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={index}>
              <h3>{todo.title}</h3>
              <h5>{todo.id}</h5>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
