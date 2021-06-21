<template>
  <div class="container">
    <div class="index_page">
      <div class="row">
        <task-form />
        <tasks />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
button {
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
}
.index_page {
  margin-top: 3rem;
}
</style>
