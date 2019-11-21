<template>
  <section>
    <div class="btns" >
      <ul>
        <li @click="goToLink('/login')" class="active" ><a>Inicio</a></li>
        <li><a>Nosotros</a></li>
        <li><a>Servicios</a></li>
        <li><a>Cotizaciones</a></li>
        <li><a>Clientes</a></li>
        <li><a>Portafolio</a></li>
        <li><a>Prosoft</a></li>
      </ul>
      <!-- <button class="login-btn" @click="goToLink('/login')">Iniciar Sesión</button> -->
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    goToLink(route){
      this.$router.push(route);
    }
  }

}
</script>

<style scoped>
.btns {
  text-align: right;
  padding: .1px;
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
  border-right:1px solid #bbb;
}

li:last-child {
  border-left: 1px solid #bbb;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: rgb(17, 60, 202);
  cursor: pointer;
}

.active {
  background-color: rgb(189, 27, 15);
}

button {
  padding: 10px;
}

</style>