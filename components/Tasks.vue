<template>
  <div v-if="checkingTasks.length || completedTasksLength" class="col-xl-6">
    <div class="swithes">
      <button
        type="button"
        class="btn btn-secondary"
        @click="component = 'CurrentTasksList'"
        :class="{ active: component === 'CurrentTasksList' }"
      >
        Текущие задачи
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        @click="component = 'CompletedTasksList'"
        :class="{ active: component === 'CompletedTasksList' }"
      >
        Выполненные задачи ({{completedTasksLength}})
      </button>
    </div>

    <component :is="component"></component>
  </div>
</template>

<script>
import CompletedTasksList from "@/components/CompletedTasksList";
import CurrentTasksList from "@/components/CurrentTasksList";

export default {
  data: () => ({
    component: "CurrentTasksList"
  }),

  computed: {
    completedTasksLength() {
      return this.$store.getters.completedTasks.length;
    },
    checkingTasks() {
      return (
        this.$store.getters.currentTasks || this.$store.getters.completedTasks
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #000;
}
.swithes {
  display: flex;
  .btn {
    width: 50%;
    border-radius: 0;
    padding: 10px 20px;
    color: #fff;
    outline: none;
    box-shadow: none;
  }
}
</style>
