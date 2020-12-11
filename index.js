const db = firebase.firestore();
const taskForm = document.getElementById("task-form");
const contenedorTareas = document.getElementById("contenedorTareas");
let EditarEstatus = false;
let id = '';

const guardarTareas = (title, description) =>
    db.collection("Tareas").doc().set({
        title,
        description,
    });
   /**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */

const getTareas = () => db.collection('Tareas').get();
const getTarea = (id) => db.collection('Tareas').doc(id).get();
const onGetTareas = (callback) => db.collection('Tareas').onSnapshot(callback);
const eliminarTarea = (id) => db.collection('Tareas').doc(id).delete();
const ActualizarTarea = (id, ActualizarTarea) => db.collection('Tareas').doc(id).update(ActualizarTarea);

window.addEventListener("DOMContentLoaded", async (e) => {
    onGetTareas((querySnapshot) =>{
        contenedorTareas.innerHTML = '';
        querySnapshot.forEach(doc =>{
            
            const Tareas = doc.data();
            Tareas.id = doc.id;
            console.log(Tareas);
            //Cards
            contenedorTareas.innerHTML += `<div class="card mt-2
            border-danger">
                <div class="card-header">
                    <h5>Tarea</h5>
                    ${Tareas.title}
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Tarea por realizar.</h5>
                        <p>${Tareas.description}</p>
                <div>
                    <button class="btn btn-danger btn-delete" data-id="${Tareas.id}">🗑 Eliminar</button>
                    <button class="btn btn-secondary btn-edit" data-id="${Tareas.id}">🖉 Modificar</button>
                </div>
            </div>`;
                //boton para eliminar card
            const btnsEliminar = document.querySelectorAll('.btn-delete');
            btnsEliminar.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    try {
                        await eliminarTarea(e.target.dataset.id)
                    } catch (error) {
                        console.log(error);
                    }
                })
            });
                //boton para editar card
            const btnsEditar = document.querySelectorAll('.btn-edit');
            btnsEditar.forEach(btn => {
                btn.addEventListener("click", async (e) => {
                    try {
                        const doc = await getTarea(e.target.dataset.id);
                        
                        const tarea = doc.data();
                       
                        taskForm["Tareas-title"].value = tarea.title;
                        taskForm["Tareas-description"].value = tarea.description;
                        
                        /*EditarEstatus = true;
                        id = doc.id;
                        taskForm["btn-save"].innerHTML = 'Actualizar';*/
                    } catch (error) {
                        console.log(error);
                    }
                });
            });
        });
    });
});
//Metodo para guardar las cards
taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskForm["Tareas-title"];
    const description = taskForm["Tareas-Descripcion"];
    try{
        if(!EditarEstatus){
            await guardarTareas(title.value, description.value);
        }else{
            await ActualizarTarea(id, {
                title: title.value,
                description: description.value,
            });
    
            EditarEstatus = false;
            id = '';
            taskForm['btn-save'].innerHTML = 'Guardar';
        }
        await getTareas();
        taskForm.reset();
        title.focus();
    } catch(error){
        console.log(error);
    }
});