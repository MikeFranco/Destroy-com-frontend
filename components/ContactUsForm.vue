<template>
  <section>
    <div class="container">
    <div class="opacidad">
      <v-app id="inspire">
        <v-form class="form" ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="createUser.name" :rules="nameRules" label="Nombre(s)" required></v-text-field>

          <v-text-field v-model="createUser.lastName" :rules="lastnameRules" label="Apellidos" required></v-text-field>

          <v-text-field v-model="createUser.email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="createUser.phoneNumber" label="Celular (opcional)" required></v-text-field>

          <v-textarea outline label="Mensaje:" color="white" cols="102" rows="5"></v-textarea>

          <v-btn color="rgb(189, 27, 15)" class="mr-4" @click="reset">Limpiar</v-btn>

          <v-btn color="#678BEC" class="mr-4" @click="validate" >Enviar</v-btn>
        </v-form>
      </v-app>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      createUser:{
        name: "",
        lastName:'',
        email: "",
        phoneNumber:'',
        password:'',
        age:25
      },
      select: null,
      checkbox: false,
      lastnameRules:[
        v => !!v || "El apellido es necesario"
      ],
      nameRules: [
        v => !!v || "El nombre es requerido",
      ],
      emailRules: [
        v => !!v || "El email es requerido",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  }

}
</script>

<style scoped>
.container {
  min-width: 100%;
  background-image: url("../assets/contact-us.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.opacidad {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  max-height: 99%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.form {
  overflow: hidden;
  padding-right: 25%;
  padding-left: 25%;
  padding-top: 140px;
  margin: 10px;
}
#inspire {
  background: 0;
  max-height: 819px;
}
</style>