<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <ContactUsForm />
    <Footer />
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar";
import Footer from "~/components/generic-cmpts/Footer";
import ContactUsForm from "~/components/ContactUsForm";
export default {
  components: { ContactUsForm, Footer, NavBar }
};
</script>

<style></style>
