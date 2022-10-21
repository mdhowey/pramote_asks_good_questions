import React from 'react'

const AddTodoForm = () => {
  return (
    <form>
      <label htmlFor='todoTitle'>Title</label>
      <input type='text' id='todoTitle'/>
      <input type='submit' value='PRESS THIS' />
    </form>
  )
}

export default AddTodoForm