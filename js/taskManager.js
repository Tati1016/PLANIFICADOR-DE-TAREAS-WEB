class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;

        this.load();
    }

    addTask(name, description, dueDate, status) {
        this.currentId++;

        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            dueDate: dueDate,
            status: 'PORHACER'
        });
    }

    createTaskHtml(id, name, description, dueDate, status) {
        let claseEstado = 'estado-pendiente';
        let textoEstado = 'Mark As Done';

        if (status === 'DONE' || status === 'COMPLETADA') {
            claseEstado = 'estado-completada';
            textoEstado = 'Completada';
        }

        return `
            <article class="card tarjeta-tarea" data-task-id="${id}">
                <div class="card-body p-3">
                    <div class="row g-3 align-items-center">

                        <div class="col-md-11">
                            <div class="d-flex justify-content-between align-items-start gap-3">

                                <div>
                                    <h3 class="titulo-tarea mb-1">
                                        ${name}
                                    </h3>

                                    <p class="descripcion-tarea mb-2">
                                        ${description}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    class="badge rounded-pill estado ${claseEstado} done-button border-0">
                                    ${textoEstado}
                                </button>

                            </div>

                            <div class="fecha-tarea d-flex align-items-center gap-2">
                                <i class="bi bi-calendar3"></i>
                                <span>${dueDate}</span>
                            </div>
                        </div>

                        <div class="col-md-1 text-end">
                            <button
                                type="button"
                                class="btn menu-tarea delete-button"
                                aria-label="Eliminar tarea">
                                <i class="bi bi-trash3"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </article>
        `;
    }

    render() {
        const listaTareas = document.querySelector('#lista-tareas');

        listaTareas.innerHTML = '';

        for (let task of this.tasks) {
            listaTareas.innerHTML += this.createTaskHtml(
                task.id,
                task.name,
                task.description,
                task.dueDate,
                task.status
            );
        }
    }

    getTaskById(taskId) {
        let foundTask;

        for (let task of this.tasks) {
            if (task.id === taskId) {
                foundTask = task;
            }
        }

        return foundTask;
    }

    deleteTask(taskId) {
        const newTasks = [];

        for (let task of this.tasks) {
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }

        this.tasks = newTasks;
    }

    save() {
        const data = {
            tasks: this.tasks,
            currentId: this.currentId
        };

        localStorage.setItem('taskManager', JSON.stringify(data));
    }

    load() {
        const savedData = localStorage.getItem('taskManager');

        if (savedData) {
            const data = JSON.parse(savedData);

            this.tasks = data.tasks;
            this.currentId = data.currentId;
        }
    }
}