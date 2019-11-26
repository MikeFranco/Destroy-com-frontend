<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="logo-div">
      <img
        src="../../assets/destroycom-logo.jpeg"
        alt="destroycom"
        class="destroycom-logo"
      />
    </div>
    <div class="first-screen">
      <h1 class="main-txt">¿Tu empresa necesita mejor conectividad?</h1>
    </div>

    <div class="row">
      <div class="column">
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/01.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/01.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <center><h3>Prueba Destroy-Com</h3></center>
      </div>

      <div class="column">
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/02.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/02.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <center><h3>Capacítate</h3></center>
      </div>

      <div class="column">
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/06.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/06.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <center><h3>Cronograma de atención</h3></center>
      </div>

      <div class="column">
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/03-1.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/03-1.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <center><h3>Soluciona incidencias</h3></center>
      </div>

      <div class="column">
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/04-1.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/04-1.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <center><h3>Preguntas frecuentes</h3></center>
      </div>

      <div class="column">
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/05-1.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/05-1.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <center><h3>Diagnostica tu red</h3></center>
      </div>
    </div>

    <div class="nuestro-trabajo">
      <h3>
        <h1>Nuestro trabajo</h1>
        <br />
        En Destroy-Com tenemos el producto que necesitas para optimizar tus
        procesos, reducir el tiempo de desarrollo y solucionar tus incidencias.
        ¡Contacta a nuestro Equipo Elite para que te ofrezcan la mejor solución
        para ti!
      </h3>
      <img src="../../assets/serverguy.jpeg" alt="ServerGuy" />
    </div>

    <div class="contact">
      <h1>Habla con un experto</h1>
      <h4>
        Deja que nuestro equipo te ayude a evaluar la mejor solución <br/>
        para tu empresa.
      </h4>
      <v-btn
        color="#005584"
        dark
        x-large
        class="white--text btn "
        @click="goToLink('/contact-us')"
      >Solicitar cotización</v-btn>
      <v-btn
        color="#005584"
        dark
        x-large
        class="white--text btn "
        @click="goToLink('/contact-us')"
      >Quiero que me llamen</v-btn>
    </div>
  </section>
</template>

<script>
import NavBar from "~/components/generic-cmpts/NavBar.vue";

export default {
  components: { NavBar },
  methods: {
    goToLink(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.contact {
  text-align: center;
  margin-bottom: 20px;
}

.contact h1 {
  padding: 15px;
  padding-top: 20px;
  font-size: 40px;
}

.contact h4 {
  padding: 15px;
  color: gray;
}

.contact v-btn {
  padding: 10px 35px;
}

.btn{
  margin: 15px 10%;
}

.main-txt {
  color: white;
  font-size: 60px;
  padding-top: 350px;
}

.first-screen {
  background-image: url("../../assets/servidor.png");
  text-align: center;
  min-height: 700px;
  background-size: cover;
}

.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.destroycom-logo {
  max-width: 300px;
  margin-top: 20px;
  margin-left: 800px;
}

.row > .column {
  padding-top: 30px;
  padding-bottom: 30px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 16%;
  align-content: center;
}

.column h3 {
  padding-left: 110px;
}

img {
  margin-left: 130px;
  /* margin-right: 50px; */
}

.nuestro-trabajo {
  background-color: #005584;
  min-height: 100px;
  min-width: 100%;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: min-content;
}

.nuestro-trabajo img {
  max-width: 900px;
}

.nuestro-trabajo h3 {
  margin-top: 180px;
  vertical-align: middle;
  margin-left: 20px;
  text-align: center;
}
</style>
