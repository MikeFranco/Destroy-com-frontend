<template>
  <section>
    <div class="carrousel">
      <PDFViewer
        msg="Carta Bajo Protesta"
        link="https://drive.google.com/file/d/1jPwkrYvtZwCDwlp4PZH2uW87aSRGoenz/view?usp=sharing"
      />
    </div>
  </section>
</template>

<script>
import PDFViewer from "~/components/generic-cmpts/PDFViewer";
export default {
  components: { PDFViewer }
};
</script>

<style>
.carrousel {
  max-width: 1800px;
  max-height: 789px;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 30px;
  margin-left: 50px;
  text-align: center;
  background-color: #005584;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  grid-auto-rows: min-content;
}
</style>
