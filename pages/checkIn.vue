<template>
  <div class="container">
    <div class="check_in">
      <h3>Регистрция</h3>
      <form action="" class="form" @submit.prevent="checkIn">
        <label for="">Имя*</label>

        <input
          type="text"
          v-model="name"
          autocomplete="off"
          :class="{
            invalid:$v.name.$dirty && !$v.name.required
          }"
        />
        <span class="error_text" v-if="$v.name.$dirty && !$v.name.required"
          >Обязательное поле*</span
        >
        <label for="">Email*</label>
        <input
          type="Email"
          v-model.trim="email"
          autocomplete="off"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <span class="error_text" v-if="$v.email.$dirty && !$v.email.required"
          >Неверный Email</span
        >
        <label for="">Пароль*</label>
        <input
          type="password"
          v-model.trim="password"
          autocomplete="off"
          :class="{
            invalid:
              (this.$v.password.$dirty && !this.$v.password.required) ||
              (this.$v.password.$dirty && !this.$v.password.minLength),
          }"
        />
        <span
          class="error_text"
          v-if="$v.password.$dirty && !$v.password.required"
          >Обязательное поле*</span
        >
        <span
          class="error_text"
          v-if="$v.password.$dirty && !$v.password.minLength"
          >Минимальное значение пароля 5 символов. Сейчас ({{
            password.length
          }})</span
        >
        <button type="submit" class="btn btn-success">Регистрация</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  layout: "authLayout",

  data: () => ({
    name: "",
    email: "",
    password: "",
  }),

  validations: {
    name: {
      required,
    },
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(5),
    },
  },

  methods: {
    async checkIn() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        try {
          await this.$store.dispatch("checkIn/login", formData);
          this.$router.push("/");
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
.check_in {
  padding-top: 50px;
  h3 {
    text-align: center;
  }
}
form {
  width: 100%;
  max-width: 600px;
  background-color: #e3f4fa;
  border-radius: 30px;
  padding: 50px 30px;
  margin: 50px auto;
  label {
    font-weight: 600;
  }
  input {
    width: 100%;
    display: block;
    margin: 10px 0 30px;
    padding: 10px 15px;
    border-color: transparent;
    border-radius: 5px;
    background: #fff;
    &:focus {
      outline: none;
    }
  }
}
</style>
