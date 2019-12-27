import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    return (
        <>
            <ul>
            {
                props.todos.map((todo, index) => {
                return (
                   <TodoItem 
                       key={index}
                       index={index}
                       todo={todo}
                       toggleTodoDone={props.toggleTodoDone}
                       handleDelete={props.handleDelete}
                   /> 
                )})
            }
            </ul>
        </>
    )
}

export default TodoList