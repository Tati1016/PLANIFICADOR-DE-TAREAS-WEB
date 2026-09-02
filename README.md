# Planificador de Tareas Web

Proyecto individual desarrollado durante el Bootcamp Full Stack Java.

El Planificador de Tareas es una aplicación web orientada a la organización de actividades. Permite crear y visualizar tareas, cambiar su estado, eliminar tareas y conservar la información en el navegador mediante localStorage.

El proyecto se desarrolla progresivamente durante diferentes sprints, incorporando nuevas funcionalidades y aplicando los conocimientos adquiridos durante el bootcamp.

## Sprint 1: Planificación e implementación de la interfaz

Durante el Sprint 1 se desarrolló la primera versión funcional de la interfaz del planificador.

Los principales avances fueron:

- Construcción de la estructura principal con HTML5 y Bootstrap 5.
- Implementación del diseño definido previamente en Figma.
- Creación del formulario para registrar tareas.
- Implementación de tarjetas para visualizar las tareas programadas.
- Integración inicial de cinco tareas de ejemplo.
- Validación de los campos requeridos mediante JavaScript.
- Implementación de mensajes de error utilizando Alert de Bootstrap.
- Adaptación de la interfaz para diferentes tamaños de pantalla.
- Publicación del proyecto mediante GitHub Pages.

## Sprint 2: JavaScript y gestión de tareas

Durante el Sprint 2 se incorporó la lógica necesaria para comenzar a gestionar las tareas desde JavaScript.

### Tarea 4: Crear la clase TaskManager

- Organización de los archivos JavaScript dentro de la carpeta `js`.
- Creación de la clase `TaskManager`.
- Inicialización del array `tasks`.
- Implementación de la interacción para marcar y desmarcar tareas como completadas.

### Tarea 5: Agregar tareas de manera programada

- Implementación de `currentId` para generar identificadores consecutivos.
- Creación del método `addTask()`.
- Registro de nuevas tareas dentro del array `tasks`.
- Conexión del formulario con `TaskManager`.
- Conservación de las validaciones desarrolladas en el Sprint 1.
- Limpieza automática del formulario después de registrar una tarea.

### Tarea 6: Eliminar una tarea

- Renderizado dinámico de las tareas en la interfaz.
- Implementación del método `deleteTask()`.
- Identificación de cada tarea mediante un id único.
- Incorporación de un botón para eliminar tareas.
- Confirmación antes de realizar una eliminación.
- Almacenamiento de las tareas utilizando `localStorage`.
- Persistencia de las tareas después de recargar la página.
- Persistencia del estado pendiente o completado.
- Actualización automática del resumen de tareas.
- Actualización automática de la fecha mostrada en el encabezado.

## Funcionalidades actuales

- Crear nuevas tareas desde el formulario.
- Validar título, descripción, fecha y estado.
- Mostrar mensajes cuando existen campos incompletos.
- Generar un identificador único para cada tarea.
- Mostrar dinámicamente las tareas registradas.
- Cambiar una tarea entre pendiente y completada.
- Conservar el estado de las tareas después de recargar la página.
- Eliminar tareas desde la interfaz.
- Solicitar confirmación antes de eliminar una tarea.
- Conservar las tareas mediante `localStorage`.
- Mantener las eliminaciones después de recargar la aplicación.
- Actualizar automáticamente el total de tareas.
- Actualizar automáticamente el total de tareas pendientes.
- Actualizar automáticamente el total de tareas realizadas.
- Mostrar dinámicamente la cantidad de tareas programadas.
- Mostrar automáticamente la fecha actual.
- Limpiar el formulario después de registrar una tarea.
- Diseño responsive para diferentes tamaños de pantalla.

## Tecnologías utilizadas

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- JavaScript
- Web Storage API (`localStorage`)

### Herramientas

- Visual Studio Code
- Git
- GitHub
- GitHub Pages
- Figma
- Trello

## Enlaces del proyecto

- [Wireframe del proyecto en Figma](https://www.figma.com/design/hYrWU23DiGgCi5Eby4DsrK/Sin-t%C3%ADtulo?t=kfFBkyBWPCytgs11-0)
- [Tablero del Sprint 1 en Trello](https://trello.com/b/XTKxKRvF/planificador-de-tareas-web)
- [Demo publicada en GitHub Pages](https://tati1016.github.io/PLANIFICADOR-DE-TAREAS-WEB/)
