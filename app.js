const formularioTarea = document.querySelector('#formulario-tarea');

const tituloInput = document.querySelector('#titulo');
const descripcionInput = document.querySelector('#descripcion');
const fechaInput = document.querySelector('#fecha');
const prioridadSelect = document.querySelector('#prioridad');
const estadoSelect = document.querySelector('#estado');
const espacioSelect = document.querySelector('#espacio');

const mensajeFormulario = document.querySelector('#mensaje-formulario');
const textoMensaje = document.querySelector('#texto-mensaje');

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
    
});

formularioTarea.addEventListener('reset', () => {
    ocultarMensajeError();
});