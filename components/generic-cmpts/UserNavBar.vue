<template>
  <section>
    <div class="btns" >
      <button>Activar Alerta</button>
      <button>Adoptar</button>
      <button>Dar en Adopción</button>
      <button>Accesorios</button>
      <button class="login-btn" @click="goToLink('/login')">Ir a Perfil</button>
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
  padding: 1%;
  font-size: 200%;
}

button {
  padding: 1%;
}

.login-btn {
  background-color: #B21779;
}
</style>