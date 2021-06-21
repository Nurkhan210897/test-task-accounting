<template>
  <div class="current-tasks">
    <div v-if="task">
      <div class="task">
        <h4>{{ task.title }}</h4>
        <p v-if="task.taskText.length > 70">
          {{ task.taskText.slice(0, 70) + " ..." }}
        </p>
        <p v-else>{{ task.taskText }}</p>
        <p>{{ task.date }}</p>
        <button
          type="button"
          class="btn btn-danger btn_delete"
          @click="deleteTask(index)"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div v-else>
      <h4>Завершенных задач нет</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task", "index"],
  methods: {
    deleteTask(index) {
      this.$store.commit("deleteCompletedTask", index);
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
    padding: 20px;
    margin-bottom: 30px;
    position: relative;
    border-radius: 10px;
    .completed {
      position: absolute;
      background-color: green;
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
  }
}
</style>
