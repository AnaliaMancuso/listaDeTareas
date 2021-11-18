import React from 'react'
//toDo es el objeto x ej {id:1, task: "tarea 1", completado: false}
export function ToDoItem({toDo, toggleToDo}) {
    const {id, task, completado} = toDo
    //son id, task y completado de toDo
    const handleToDoClick =() => {
        toggleToDo(id)
        //los eventos van de abajo hacia arriba, de acá hasta app
    }
    return (
        <li>
            <input type="checkbox" onChange={handleToDoClick}/>
            {task}
        </li>
    )
}
