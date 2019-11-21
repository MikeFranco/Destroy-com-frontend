<template>
  <section>
    <div class="carrousel">
      <PDFViewer
        msg="Carta Bajo Protesta"
        link="https://drive.google.com/file/d/1jPwkrYvtZwCDwlp4PZH2uW87aSRGoenz/view?usp=sharing"
      />
      <PDFViewer
        msg="Carta Compromiso"
        link="https://drive.google.com/file/d/13fPIowW0N7hFltv7HGQ2LOAHTgHj0lpe/view?usp=sharing"
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

<style scoped>
h1 {
  color: white;
  margin-top: 20px;
}

.carrousel {
  max-width: 1800px;
  max-height: 850px;
  overflow-x: auto;
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
