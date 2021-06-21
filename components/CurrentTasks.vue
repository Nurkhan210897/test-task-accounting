<template>
  <div class="current-tasks" v-if="task">
    <div class="task">
      <div
        v-if="newEntry === task.title"
        class="edit_block qwe"
        ref="editBlock"
      >
        <input type="text" v-model="title" ref="editBlock" @click.stop />
        <button class="btn btn-primary" @click="saveNewData(task)">
          Сохранить
        </button>
        <button class="btn" @click="newEntry = null">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="data_task" v-else>
        <h4>{{ task.title }}</h4>
        <button
          type="button"
          class="btn btn_edit first"
          @click.stop="editTask(task.title)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>
      </div>

      <div v-if="newEntry === task.taskText" class="edit_block">
        <input type="text" v-model="newTaskText" />
        <button class="btn btn-primary" @click="saveNewData(task)">
          Сохранить
        </button>
        <button class="btn" @click="newEntry = null">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="data_task" v-else>
        <p v-if="task.taskText.length > 70">
          {{ task.taskText.slice(0, 70) + "..." }}
        </p>
        <p v-else>{{ task.taskText }}</p>
        <button
          type="button"
          class="btn btn_edit"
          @click="editTask(task.taskText)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>
      </div>

      <div class="date">
        <p>{{ task.date }}</p>
      </div>

      <div class="task_buttons">
        <button class="btn btn-primary" @click="completeTask(task)">
          Выполнить
        </button>
        <button class="btn btn-danger btn_delete" @click="deleteTask(index)">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task", "index"],

  data: () => ({
    title: "",
    newTaskText: "",
    newEntry: null
  }),

  computed: {
    currentTasks() {
      return this.$store.getters.currentTasks;
    }
  },

  methods: {
    completeTask(task) {
      this.$store.commit("completeTask", task);
    },

    deleteTask(index) {
      this.$store.commit("deleteTask", index);
    },

    saveNewData(task) {
      let newTaskData = {
        title: this.title,
        newText: this.newTaskText
      };
      this.$store.commit("editTask", { task, newTaskData: newTaskData });
      this.newEntry = null;
    },

    editTask(task) {
      this.newEntry = task;
    }
  }
};
</script>

<style lang="scss">
.title {
  text-align: center;
  margin-bottom: 40px;
}
.current-tasks {
  .task {
    background-color: #f8f9fa;
    padding: 40px 20px;
    margin-bottom: 30px;
    position: relative;
    border-radius: 10px;
    .is_completed {
      position: absolute;
      background-color: #dd3b3b;
      min-width: 25px;
      min-height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 50%;
      font-size: 14px;
      right: 10px;
      top: 10px;
    }
    .data_task {
      display: flex;
      align-items: baseline;
    }
    .btn_edit {
      padding: 0;
      margin-left: 20px;
    }
  }
}
.edit_block {
  width: fit-content;
  input {
    border: 1px solid #ccc;
    padding: 8px 15px;
    margin-right: 15px;
  }
}
.btn_delete {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.task_buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
</style>
