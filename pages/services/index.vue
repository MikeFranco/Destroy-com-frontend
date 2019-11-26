<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Services />
    <Footer />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar.vue";
import Services from "~/components/Services";
import Footer from "~/components/generic-cmpts/Footer";

export default {
  components: { NavBar, Services, Footer },
};
</script>

<style scoped> </style>