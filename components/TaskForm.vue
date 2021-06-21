<template>
  <div class="col-xl-6">
    <div class="form_wrapper">
      <form action="" @submit.prevent="addTask">
        <label for="">Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          v-model="title"
          :class="{
            invalid: isTitleDirtyOrNotRequiredOrMinLengthIsNotEnough
          }"
        />
        <span class="error_text" v-if="$v.title.$dirty && !$v.title.required"
          >Обязательное поле*</span
        >
        <span class="error_text" v-if="$v.title.$dirty && !$v.title.minLength"
          >Минимальное значение текста 3. Сейчас ({{ title.length }})</span
        >

        <input type="date" v-model="date">
        <label for="">Текст задачи</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Текст задачи"
          v-model="taskText"
          :class="{
            invalid: istaskTextDirtyOrNotRequiredOrMinLengthIsNotEnough
          }"
        ></textarea>
        <span
          class="error_text"
          v-if="$v.taskText.$dirty && !$v.taskText.required"
          >Обязательное поле*</span
        >
        <span
          class="error_text"
          v-if="$v.taskText.$dirty && !$v.taskText.minLength"
          >Минимальное значение текста 10 символов. Сейчас ({{
            taskText.length
          }})</span
        >
        <button type="submit" class="btn btn-success">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    title: "",
    taskText: "",
    taskId: 0,
    date: ''
  }),

  validations: {
    title: {
      required,
      minLength: minLength(3)
    },
    taskText: {
      required,
      minLength: minLength(10)
    }
  },

  computed: {
    isTitleDirtyOrNotRequiredOrMinLengthIsNotEnough() {
      return (
        (this.$v.title.$dirty && !this.$v.title.required) ||
        !this.$v.title.minLength
      );
    },
    istaskTextDirtyOrNotRequiredOrMinLengthIsNotEnough() {
      return (
        (this.$v.taskText.$dirty && !this.$v.taskText.required) ||
        !this.$v.taskText.minLength
      );
    }
  },
  methods: {
    addTask() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let taskFormData = this.getTaskFormData();
        this.$store.commit("addTask", taskFormData);
        this.resetForm();
      }
    },
    getTaskFormData() {
      this.taskId++;
      return {
        id: this.taskId,
        title: this.title,
        date: this.date,
        taskText: this.taskText,
      };
    },
    resetForm() {
      this.title = "";
      this.taskText = "";
      this.$v.$reset();
    }
  }
};
</script>

<style lang="scss">
.invalid {
  border-color: #dd3b3b !important;
}
.error_text {
  color: #dd3b3b;
  display: block;
  margin-top: -20px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
}
.form_wrapper {
  background-color: #f8f9fa;
  padding: 30px 20px;
  form {
    width: 100%;
    label {
      font-weight: bold;
      font-size: 24px;
    }
    input,
    textarea {
      margin: 20px 0 30px;
      width: 100%;
      display: block;
      padding: 10px 15px;
      border-radius: 5px;
      border-color: transparent;
      outline: none;
      border-width: 1px;
    }
    .btn-success {
      display: block;
      margin: 40px auto 0;
    }
  }
}
</style>
