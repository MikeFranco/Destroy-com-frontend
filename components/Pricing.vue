<template>
  <section>
    <div class="carrousel" >
      <PDFViewer
        msg="Cotizaciones"
        link="https://drive.google.com/file/d/1mxT6zM7rXc5mRd-noRAnDhnPTZ0shcnc/view?usp=sharing"
      />
    </div>
  </section>
</template>

<script>
import PDFViewer from "./generic-cmpts/PDFViewer";
export default {
  components: { PDFViewer }
};
</script>

<style scoped>
.carrousel {
  max-width: 1000px;
  max-height: 850px;
  margin-top: 30px;
  margin-left: 450px;
  text-align: center;
  background-color: #005584;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  grid-auto-rows: min-content;
}
</style>
