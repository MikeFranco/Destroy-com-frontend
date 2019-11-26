<template>
  <section>
    <div class="carrousel">
      <PDFViewer
        msg="Licitación"
        link="https://drive.google.com/file/d/1eKUo--01mFvI_ejdUFO4ZFlG9v3e45wL/view?usp=sharing"
      />
      <PDFViewer
        msg="Convocatoria múltiple"
        link="https://drive.google.com/file/d/1_HWNP7rbiZ7YECvvz-5YoNpYAx24jTOq/view?usp=sharing"
      />
      <PDFViewer
        msg="Propuesta al gobierno"
        link="https://drive.google.com/file/d/1PFfFsqf58zo4GuqfbatyXGka1457dYl8/view?usp=sharing"
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
