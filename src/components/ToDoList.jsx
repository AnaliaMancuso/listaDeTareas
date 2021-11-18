import React from 'react'
import { ToDoItem } from './ToDoItem'

export function ToDoList({ToDos, toggleToDo}) {
    //ToDos es la prop que le debo pasar al contenedor superior luego
    return (
        <ul>
            {ToDos.map((toDo)=>(
                <ToDoItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo}/>
            ))}
        </ul>
    )
}
