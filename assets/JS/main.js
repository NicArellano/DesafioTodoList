
//defino variables

const input = document.getElementById("input");
const botonAgregar = document.getElementById("agregar");


const tabla = document.getElementById("tabla");
const realizadas = document.getElementById("realizadas")
const contador = document.getElementById("conteo")

const tareas = []

//Actualizar DOM

const render = () => {
    let html = `<tr>
    <th>ID</th>
    <th>Tarea</th>
    </tr>`
    tareas.forEach((tarea) => {
        html += `<tr>
            <td>${tarea.id} </td>
            <td>${tarea.name}</td>
            <td> <input onClick="cambiarEstado(${tarea.id})" type="checkbox"${tarea.completed && "checked"} > </td>
            <td> <button onClick="borrar(${tarea.id})"> X </button> </td>
            </tr>`

    }
    )

    tabla.innerHTML = html
    contador.innerHTML = `Total: ${tareas.length}`
    realizadas.innerHTML = `Realizadas: ${tareas.filter((tarea) => tarea.completed).length}`
}

//agregar 

botonAgregar.addEventListener("click", () => {
    const nuevaTarea = { id: tareas.length ? tareas[tareas.length - 1].id + 1 : 0, completed: false, name: input.value }
    tareas.push(nuevaTarea)
    input.value = ""

    render()
})




//borrar 

const borrar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id )
    tareas.splice(index,1)

    render()
}

const cambiarEstado = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id )
    tareas[index].completed = !tareas[index].completed

    render()

}

