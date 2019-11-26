<template>
  <section>
    <div class="btns">
      <ul>
        <li class="active list" @click="goToLink('/team')">Nosotros</li>
        <li class="list" @click="goToLink('contact-us')">Contáctanos</li>
        <li class="list" @click="goToLink('/pricing')">Cotizaciones</li>
        <li class="list" @click="goToLink('/prosoft')">Prosoft</li>
        <li class="list" @click="goToLink('/goverment')">Gobierno</li>
        <li class="list" @click="goToLink('/clients')">Clientes</li>
        <li class="list" @click="goToLink('/services')">Servicios</li>
        <li class="images">
          <a href="https://www.facebook.com/MikeFranco007" target="_blank"><img src="../../assets/facebook.png" alt="fb-logo" /></a>
        </li>
        <li class="images">
          <a href="https://www.instagram.com/programiker/" target="_blank"><img src="../../assets/insta.png" alt="insta-logo" /></a>
        </li>
        <li class="images">
          <a href="https://twitter.com/PrograMiker?s=09" target="_blank"><img src="../../assets/twitter.png" alt="twitter-logo" /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToLink(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0.1px;
  font-size: 200%;
}

img {
  max-width: 44px;
}

.images {
  padding: 0 10px;
  padding-top: 14px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(17, 112, 202);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

li {
  float: right;
  border-right: 1px solid #bbb;
  border-left: 1px solid #bbb;
}

li:not(.list) {
  border-left: none;
  border-right: none;
}

li {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover:not(.active) {
  background-color: rgb(17, 60, 202);
  cursor: pointer;
}

.images {
  border-right: none;
}

.active {
  background-color: rgb(189, 27, 15);
}

.active:hover {
  cursor: pointer;
  background-color: rgb(17, 60, 202);
}

button {
  padding: 10px;
}
</style>
