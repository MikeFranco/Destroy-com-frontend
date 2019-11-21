<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Prosoft />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar.vue";
import Prosoft from "~/components/Prosoft";

export default {
  components: { NavBar, Prosoft },
};
</script>

<style scoped>

</style>
