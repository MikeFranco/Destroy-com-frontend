<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="carrousel">
      <PDFViewer
        msg="Carta Bajo Protesta"
        link="https://drive.google.com/file/d/1jPwkrYvtZwCDwlp4PZH2uW87aSRGoenz/view?usp=sharing"
      />
    </div>
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar";
import PDFViewer from "~/components/generic-cmpts/PDFViewer";

export default {
  components: { NavBar, PDFViewer }
};
</script>

<style scoped>
.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  padding-bottom: 15px;
}
</style>
