<template>
  <section>
    <div class="carrousel">
      <PDFViewer
        msg="Carta Bajo Protesta"
        link="https://drive.google.com/file/d/1jPwkrYvtZwCDwlp4PZH2uW87aSRGoenz/view?usp=sharing"
      />
      <PDFViewer
        msg="Solicitud de Apoyo"
        link="https://drive.google.com/file/d/1BjbUVtssHaH8UumpxjXWqR6I0GuRYZIe/view?usp=sharing"
      />
      <PDFViewer
        msg="Cotizaciones"
        link="https://drive.google.com/file/d/1mxT6zM7rXc5mRd-noRAnDhnPTZ0shcnc/view?usp=sharing"
      />
      <PDFViewer
        msg="Carta Compromiso"
        link="https://drive.google.com/file/d/13fPIowW0N7hFltv7HGQ2LOAHTgHj0lpe/view?usp=sharing"
      />
      <PDFViewer
        msg="Modelo paramétrico"
        link="https://drive.google.com/file/d/18fFOtcnomTwFRbzkpEOdSh-FBr17flvI/view?usp=sharing"
      />
      <PDFViewer
        msg="Representantes legales"
        link="https://drive.google.com/file/d/1EsVWXJ-Flobmqu88d0YAv6BSTCDF-Xsh/view?usp=sharing"
      />
      <PDFViewer
        msg="Proveedores"
        link="https://drive.google.com/file/d/190aH4BDEmHZ9zkUwjpt6rZbNwvXbI2X2/view?usp=sharing"
      />
      <PDFViewer
        msg="Diagrama de Grantt"
        link="https://drive.google.com/file/d/1qF-2WK_0Vvl6PSP09_QLPDrZglm4yHi_/view?usp=sharing"
      />
      <PDFViewer
        msg="Capacitación"
        link="https://drive.google.com/file/d/1K8WZXwc1tsTPP9TJqaUgTDmHwZEnJw_S/view?usp=sharing"
      />
      <PDFViewer
        msg="Carta AutoFinanciamiento"
        link="https://drive.google.com/file/d/1cSMSLNWzyx9-Ah1ku-aEXQJPhDF1Hmri/view?usp=sharing"
      />
      <PDFViewer
        msg="Reporte Final"
        link="https://drive.google.com/file/d/17VyEYqzc-VVpVYDjSp0gTri1DIADFBWz/view?usp=sharing"
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
