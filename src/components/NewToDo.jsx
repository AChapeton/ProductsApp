import React from 'react'

const NewToDo = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}> 
                <input onChange={props.handleChange} 
                       type="text" 
                       placeholder="Add ToDo" 
                       value={props.newTodo}/>
                <button type="submit" className="btn btn-secondary">
                    Add
                </button>
            </form>
        </>
    )
}

export default NewToDo
