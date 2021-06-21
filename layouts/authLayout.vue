<template>
  <div class="auth-layout">
    <nuxt/>
  </div>
</template>

<script>
export default {
  computed:{
    error(){
     return this.$store.getters.error
    }
  },

  watch:{
    error(fbError){
      console.log(fbError);
    }
  }
}
</script>

<style>

</style>
