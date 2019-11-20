<template>
  <div class="entry-new-pet-button">
    <button @click="showDogsForm" ><h3>¡REGISTRA OTRA MASCOTA!</h3></button>
  </div>
</template>

<script>
export default {
  props:['showDogsForm']
};
</script>

<style>
.entry-new-pet-button {
  background-color: #B21779;
  border-radius: 30px;
  font-size: 30px;
  padding: 40px;
  margin: 10px;
  color: white;
}
</style>