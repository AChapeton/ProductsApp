import React from 'react'

const NewToDo = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}> 
                <input onChange={props.handleChange} 
                       type="text" 
                       placeholder="Add ToDo" 
                       value={props.newTodo}
                       className="w-75"
                       />
                <button type="submit" className="btn btn-secondary">
                    Add
                </button>
            </form>
        </>
    )
}

export default NewToDo
