<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Prosoft />
    <Footer />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar.vue";
import Prosoft from "~/components/Prosoft";
import Footer from "~/components/generic-cmpts/Footer";

export default {
  components: { NavBar, Prosoft, Footer },
};
</script>

<style scoped>

</style>
