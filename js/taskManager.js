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

    createTaskHtml(task) {
        return `
            <article class="card tarjeta-tarea" data-task-id="${task.id}">
                <div class="card-body p-3">
                    <div class="row g-3 align-items-center">

                        <div class="col-md-11">
                            <div class="d-flex justify-content-between align-items-start gap-3">

                                <div>
                                    <h3 class="titulo-tarea mb-1">
                                        ${task.name}
                                    </h3>

                                    <p class="descripcion-tarea mb-2">
                                        ${task.description}
                                    </p>
                                </div>

                                <span class="badge rounded-pill estado estado-pendiente">
                                    Pendiente
                                </span>

                            </div>

                            <div class="fecha-tarea d-flex align-items-center gap-2">
                                <i class="bi bi-calendar3"></i>
                                <span>${task.dueDate}</span>
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
            listaTareas.innerHTML += this.createTaskHtml(task);
        }
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