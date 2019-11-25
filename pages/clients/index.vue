<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Clients />
    <Footer />
  </section>
</template>

<script>
import Clients from "~/components/Clients";
import NavBar from "~/components/generic-cmpts/NavBar";
import Footer from "~/components/generic-cmpts/Footer";

export default {
  components: { Clients, Footer, NavBar }
};
</script>

<style>
.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
</style>
