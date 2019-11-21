<template>
  <section>
    <div class="carrousel" >
      <div>
        <h1>Carta bajo protesta</h1>
        <iframe
          class="pdf"
          src="https://drive.google.com/file/d/1jPwkrYvtZwCDwlp4PZH2uW87aSRGoenz/view?usp=sharing"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>

export default { };
</script>

<style scoped>

.pdf {
  min-width: 880px;
  max-width: 880px;
  min-height: 800px;
  max-height: 800px;
  margin: 20px;
}

.carrousel{
  max-width: 700px;
  overflow-x: auto;
  background-color: #005584;
  margin: 50px;
}

</style>
