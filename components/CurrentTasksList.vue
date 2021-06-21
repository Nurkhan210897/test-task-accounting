<template>
  <div>
    <current-tasks v-for="(task, index) in currentTasks" :key="task.id" :task="task" :index="index"/>
  </div>
</template>

<script>
import CurrentTasks from "./CurrentTasks.vue";

export default {
  components:{CurrentTasks},

  computed: {
    currentTasks() {
      return this.$store.getters.currentTasks;
    }
  }
};
</script>

<style></style>
