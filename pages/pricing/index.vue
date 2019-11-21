<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Pricing />
    <Footer />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar";
import Pricing from "~/components/Pricing";
import Footer from "~/components/generic-cmpts/Footer";

export default {
  components: { NavBar, Pricing, Footer }
}
</script>

<style scoped>
.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
</style>