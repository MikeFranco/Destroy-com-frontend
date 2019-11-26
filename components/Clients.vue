<template>
  <section>
    <div class="carrousel">
      <PDFViewer
        msg="Nuestros clientes"
        link="https://drive.google.com/file/d/12YMAxJSbQszYS2JReP0VmHzLC8RxlgOd/view?usp=sharing"
      />
    </div>
  </section>
</template>

<script>
import PDFViewer from "~/components/generic-cmpts/PDFViewer";

export default {
  components: {
    PDFViewer
  }
};
</script>

<style scoped>
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
