<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Nosotros />
  </section>
</template>

<script>
import Nosotros from "~/components/nosotros-cmpts/Nosotros";
import NavBar from "~/components/generic-cmpts/NavBar";

export default {
  components: { Nosotros, NavBar }
}
</script>

<style scoped>
.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  padding-bottom: 15px;
}
</style>