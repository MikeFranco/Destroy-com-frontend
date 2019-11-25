<template>
  <section>
    <div class="btns">
      <ul>
        <li @click="goToLink('/')" class="active"><a>Inicio</a></li>
        <li @click="goToLink('/team')">Nosotros</li>
        <li @click="goToLink('/pricing')">Cotizaciones</li>
        <li @click="goToLink('/prosoft')">Prosoft</li>
        <li @click="goToLink('/goverment')" >Gobierno</li>
        <li @click="goToLink('/clients')" >Clientes</li>
        <li>Servicios</li>
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
}

li:last-child {
  border-left: 1px solid #bbb;
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
