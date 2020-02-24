import React from 'react'

const TodoItem = (props) => {
    const {todo, index} = props

    return (
        <>
            <li>
                <input onChange={(e) => props.toggleTodoDone(e, index)} type="checkbox" checked={todo.done}/>
                <span className={todo.done ? 'done' : ''}>{todo.title}</span>
                <button className="btn btn-danger" onClick={() => props.handleDelete(index)}>Delete</button>
            </li>
        </>
    )
}

export default TodoItem
