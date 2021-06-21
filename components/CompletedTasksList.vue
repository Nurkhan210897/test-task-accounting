<template>
  <div>
    <completed-task v-for="(task, index) in completedTasks" :key="task.id" :task="task" :index="index"/>
  </div>
</template>

<script>
import completedTask from "./CompletedTask.vue";

export default {
  components:{completedTask},

  computed: {
    completedTasks() {
      return this.$store.getters.completedTasks;
    }
  }
};
</script>

<style></style>
