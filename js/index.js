const taskManager = new TaskManager();

const formularioTarea = document.querySelector('#formulario-tarea');

const tituloInput = document.querySelector('#titulo');
const descripcionInput = document.querySelector('#descripcion');
const fechaInput = document.querySelector('#fecha');
const prioridadSelect = document.querySelector('#prioridad');
const estadoSelect = document.querySelector('#estado');
const espacioSelect = document.querySelector('#espacio');

const mensajeFormulario = document.querySelector('#mensaje-formulario');
const textoMensaje = document.querySelector('#texto-mensaje');

const listaTareas = document.querySelector('#lista-tareas');

const totalTareasElemento = document.querySelector('#total-tareas');
const totalPendientesElemento = document.querySelector('#total-pendientes');
const totalRealizadasElemento = document.querySelector('#total-realizadas');
const cantidadTareasElemento = document.querySelector('#cantidad-tareas');

const fechaActualElemento = document.querySelector('#fecha-actual');

taskManager.render();
actualizarResumenTareas();
actualizarFechaActual();

function validFormFieldInput(data) {
    if (!data.titulo) {
        return 'Ingresa el título de la tarea.';
    }

    if (!data.descripcion) {
        return 'Ingresa una descripción para la tarea.';
    }

    if (!data.fecha) {
        return 'Selecciona una fecha de entrega.';
    }

    if (!data.estado) {
        return 'Selecciona el estado de la tarea.';
    }

    return '';
}

function mostrarMensajeError(mensaje) {
    textoMensaje.textContent = mensaje;

    mensajeFormulario.classList.remove('d-none');
    mensajeFormulario.classList.add('d-flex');
}

function ocultarMensajeError() {
    mensajeFormulario.classList.remove('d-flex');
    mensajeFormulario.classList.add('d-none');
}

function actualizarResumenTareas() {
    const totalTareas = taskManager.tasks.length;
    let totalPendientes = 0;
    let totalRealizadas = 0;

    for (let task of taskManager.tasks) {
        if (task.status === 'COMPLETADA') {
            totalRealizadas++;
        } else {
            totalPendientes++;
        }
    }

    totalTareasElemento.textContent = totalTareas;
    totalPendientesElemento.textContent = totalPendientes;
    totalRealizadasElemento.textContent = totalRealizadas;

    if (totalTareas === 1) {
        cantidadTareasElemento.textContent = '1 tarea';
    } else {
        cantidadTareasElemento.textContent = totalTareas + ' tareas';
    }
}

function actualizarFechaActual() {
    const fechaActual = new Date();

    const fechaFormateada = fechaActual.toLocaleDateString('es-CO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    fechaActualElemento.textContent =
        fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
}

formularioTarea.addEventListener('submit', (event) => {
    event.preventDefault();

    const datosTarea = {
        titulo: tituloInput.value.trim(),
        descripcion: descripcionInput.value.trim(),
        fecha: fechaInput.value,
        prioridad: prioridadSelect.value,
        estado: estadoSelect.value,
        espacio: espacioSelect.value
    };

    console.log('Título:', datosTarea.titulo);
    console.log('Descripción:', datosTarea.descripcion);
    console.log('Fecha:', datosTarea.fecha);
    console.log('Prioridad:', datosTarea.prioridad);
    console.log('Estado:', datosTarea.estado);
    console.log('Espacio:', datosTarea.espacio);

    const mensajeError = validFormFieldInput(datosTarea);

    if (mensajeError) {
        mostrarMensajeError(mensajeError);
        return;
    }

    ocultarMensajeError();

    taskManager.addTask(
        datosTarea.titulo,
        datosTarea.descripcion,
        datosTarea.fecha,
        datosTarea.estado
    );

    taskManager.save();
    taskManager.render();
    actualizarResumenTareas();

    console.log(taskManager.tasks);

    formularioTarea.reset();
});

formularioTarea.addEventListener('reset', () => {
    ocultarMensajeError();
});

listaTareas.addEventListener('click', (event) => {
    const botonEstado = event.target.closest('.boton-estado');

    if (botonEstado) {
        const parentTask = botonEstado.closest('.tarjeta-tarea');
        const taskId = Number(parentTask.dataset.taskId);

        taskManager.toggleTaskStatus(taskId);
        taskManager.save();
        taskManager.render();
        actualizarResumenTareas();

        return;
    }

    const botonEliminar = event.target.closest('.delete-button');

    if (botonEliminar) {
        const parentTask = botonEliminar.closest('.tarjeta-tarea');
        const taskId = Number(parentTask.dataset.taskId);

        const confirmarEliminacion = confirm('¿Deseas eliminar esta tarea?');

        if (!confirmarEliminacion) {
            return;
        }

        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
        actualizarResumenTareas();
    }
});