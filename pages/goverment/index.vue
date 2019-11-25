<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <Goverment />
    <Footer />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar";
import Footer from "~/components/generic-cmpts/Footer";
import Goverment from "~/components/Goverment";
export default {
  components: { NavBar, Footer, Goverment }
}
</script>

<style>

</style>