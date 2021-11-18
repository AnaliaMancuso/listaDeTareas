import React, {useState, useRef, useEffect} from 'react';
import { ToDoList } from './components/ToDoList';
import { v4 as uuidv4 } from "uuid"


const KEY = "todosApp.todos";

export function App (){
    const [ToDos, setToDos] = useState([
        {id:1, task: "tarea 1", completado: false}
    ]);
    //el useState hace que cada vez que estado cambio se re-renderice
    //useState es un array, una es el estado en si y la otra es la funcion que hace modificar ese estado
    //el useState se inicializa con una tarea inicia, [] cuando ocurre una vez
    //en el return paso como prop

    const ToDoTaskRef = useRef();

    useEffect(()=> {
        const storesTodos = JSON.parse(localStorage.getItem(KEY));
        if (storesTodos) {
            setToDos(storesTodos);
        }
    }, []);
    //PARA GUARDAR LOS DATOS QUE PUSE EN LA LISTA
    useEffect(()=>{
        localStorage.setItem('KEY', JSON.stringify(ToDos))
    },[ToDos])


    const toggleToDo = (id) => {
        const newToDos = [...ToDos];
        const toDo = newToDos.find((toDo) => toDo.id === id);
        toDo.completado = !toDo.completed;
        setToDos(newToDos);
    }
    const handleToDoAdd = () => {
        const task = ToDoTaskRef.current.value;
        if (task === '') return;
        //añadir ese task como nueva tarea:
        setToDos((prevToDos) => {
            return [...prevToDos, {id: uuidv4(), task, completado: false}];
        });
        //si pongo un estado dentro de setTODos hace la version previa. 
        //esto es porque si hay cambios en el estado hay que hacer una copia del anterior estado}
        ToDoTaskRef.current.value = null;
    };
    const handleClearAll =()=> {
        const newToDos = ToDos.filter((toDo)=> !toDo.completado );
        setToDos(newToDos);
    }
    return (
        <>
        <ToDoList ToDos={ToDos} toggleToDo={toggleToDo}/>
        <input  ref={ToDoTaskRef} type="text" placeholder="nueva tarea"/>
        <button onClick={handleToDoAdd}>AÑADIR</button>
        <button onClick={handleClearAll}>DELETE</button>
        <div>te quedan {ToDos.filter((toDo)=> !toDo.completado).length} tareas por terminar</div>
        </>
        //los props van de arriba hacia abajo, de  app al mas chico
    )
}

// Carlos Azaustre en youtube
// https://www.youtube.com/watch?v=EMk6nom1aS4