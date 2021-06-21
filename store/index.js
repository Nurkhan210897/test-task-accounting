export const state = () => ({
    currentTasks: [],
    completedTasks: [],
    error: null
})

export const mutations = {
    setError(state, error) {
        state.error = error
    },

    clearError(state) {
        state.error = null
    },

    addTask(state, taskContent) {
        state.currentTasks.push(taskContent);
    },

    completeTask(state, task) {
        if (state.completedTasks.length) {
            for (let i = 0; i < state.completedTasks.length; i++) {
                if (state.completedTasks[i].id === task.id) {
                    alert('Задача уже выполнена');
                    return;
                }
            }
        }
        state.completedTasks.push(task);
    },

    deleteTask(state, index) {
        state.currentTasks.splice(index, 1)
    },

    deleteCompletedTask(state, index) {
        state.completedTasks.splice(index, 1)
    },

    editTask(state, { task, newTaskData }) {
        state.currentTasks.filter((item) => {
            if (item.id === task.id) {
                item.title = newTaskData.title !== '' ? newTaskData.title : task.title
                item.taskText = newTaskData.newText !== '' ? newTaskData.newText : task.taskText
            }
        })
    }
}


export const getters = {
    error: ((state) => {
        state.error
    }),

    currentTasks: ((state) => {
        return state.currentTasks
    }),

    completedTasks: ((state) => {
        return state.completedTasks
    })
}