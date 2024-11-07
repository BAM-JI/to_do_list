"use client"
//componente funcional

//funcion anonima
//Funcion flecha
//funcion de expresion
//funcion de asignacion
//IIEF(inmediately Invoked Function Expression)
//Funcion de expresion invocada inmediata

//funcion de expresion
import styles from "./page.module.css"
import { useState } from "react"
export default function Page() {

  const [tareas, setTareas] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const[filtroPrioridad,setFiltroPrioridad] = useState("");


  const [nuevaTarea, setNuevaTarea] = useState({
    nombre: "",
    fecha: "",
    prioridad: ""
  })
  function handleChange(event) {
    setNuevaTarea({
      ...nuevaTarea,
      [event.target.name]: event.target.value
    })
  }

  function handleChangeSearchTexto(event) {
    setFiltroTexto(event.target.value)
  }

  function handleChangeSearchPrioridad(event) {
    setFiltroPrioridad(event.target.value);
  }

  function agregarTarea() {
    const newListaTareas = tareas.slice();
    const tareaNueva = {
      nombre: nuevaTarea.nombre,
      fecha: nuevaTarea.fecha,
      prioridad: nuevaTarea.prioridad,
      creadoEl: new Date().toISOString()
    }
    newListaTareas.push(tareaNueva);
    setTareas(newListaTareas);

    setNuevaTarea(newListaTareas);
    setNuevaTarea({
      nombre: "",
      fecha: "",
      prioridad: ""
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>

        <h1>todo-list</h1>
        <input value={nuevaTarea.nombre}
          onChange={handleChange}
          type="text" placeholder="Agregar tarea.."
          name="nombre" />
        <input type="date"
          name="fecha"
          onChange={handleChange}
          value={nuevaTarea.fecha}
        />
        <select
          name="prioridad"
          onChange={handleChange}
          value={nuevaTarea.prioridad}>
          <option value={""}>Prioridad</option>
          <option value={"alta"}>Alta</option>
          <option value={"media"}>Media</option>
          <option value={"baja"}>Baja</option>
        </select>
        <button onClick={agregarTarea}>Agregar</button>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h4>Filtros</h4>
          <input type="text" placeholder="Buscar tarea..."
            className={styles.busqueda}
            onChange={handleChangeSearchTexto}
            value={filtroTexto} />

          <div>
            <p>Ordenar por PRIORIDAD</p>
            <select className={styles.busqueda}
            onChange={handleChangeSearchPrioridad}
              value={filtroPrioridad}>
              <option value="">Prioridad</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>

          </div>
        </div>
        <div style={{
          marginTop: "20px",

        }}>
          <ul>
            {
              tareas
                .filter((tarea) => tarea.nombre.toLowerCase().includes(filtroTexto.toLowerCase()
                ))
                .filter(
                  (tarea)=>{
                    if(filtroPrioridad === ""){
                      return true;
                    }
                    return tarea.prioridad === filtroPrioridad;
                  }
                )
                .map(
                  (tarea) => {
                    return (
                      <li className={styles.tarea} >
                        <h6>{tarea.nombre}</h6>
                        <p>{tarea.fecha}</p>
                        <p>{tarea.date}</p>
                      </li>
                    )
                  }//callback
                )
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

//CSS:
//estilos en clase
//estilos por id 
//estlos en linea
//estilos por etiqueta 
//orden de procedencia de los estilos:
//estilos en linea
//estilos por id
//estilos en etiqueta
//estilos por clase