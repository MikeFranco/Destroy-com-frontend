<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Pricing />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar";
import Pricing from "~/components/Pricing";

export default {
  components: { NavBar, Pricing }
}
</script>

<style scoped>
.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
</style>