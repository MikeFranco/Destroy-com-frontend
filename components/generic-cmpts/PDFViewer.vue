<template>
  <div>
    <h1>{{ msg }}</h1>
    <iframe class="pdf" :src="link" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: ["msg", "link"]
};
</script>

<style scoped>
h1 {
  color: white;
  margin-top: 20px;
}

.pdf {
  min-width: 880px;
  max-width: 880px;
  min-height: 700px;
  max-height: 700px;
  margin: 20px;
}
</style>
