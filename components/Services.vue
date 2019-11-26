<template>
  <section>
     <div class="carrousel">
      <PDFViewer
        msg="Nuestros servicios"
        link="https://drive.google.com/file/d/1eKUo--01mFvI_ejdUFO4ZFlG9v3e45wL/view?usp=sharing"
      />
    </div>
  </section>
</template>

<script>
import PDFViewer from "~/components/generic-cmpts/PDFViewer";
export default {
  components: { PDFViewer }
}
</script>

<style>
.carrousel {
  max-width: 1000px;
  max-height: 792px;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 30px;
  padding-left: 50px;
  margin-left: 25%;
  text-align: center;
  background-color: #005584;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  grid-auto-rows: min-content;
}
</style>