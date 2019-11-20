<template>
  <section class="container">
    <div class="opacidad">
      <v-app id="inspire">
        <v-form class="form" ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="createUser.name" :rules="nameRules" label="Nombre" required></v-text-field>

          <v-text-field v-model="createUser.lastName" :rules="lastnameRules" label="Apellido" required></v-text-field>

          <v-text-field v-model="createUser.email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="createUser.phoneNumber" :rules="phoneNumberRules" label="Celular" required></v-text-field>

          <v-text-field type="password" v-model="createUser.password" :rules="passwordRules" label="Contraseña" required></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="¿Aceptas terminos y condiciones de nuestro aviso de privacidad?"
            required
          ></v-checkbox>

          <v-btn color="#B21779" class="mr-4" @click="reset">Limpiar</v-btn>

          <v-btn color="#678BEC" class="mr-4" @click="createNewUser">Crear Usuario</v-btn>
        </v-form>
      </v-app>
    </div>
  </section>
</template> 

<script>
export default {
  data() {
    return {
      bckImg: require("../../assets/login.jpg"),
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
        v => !!v || "Last Name is required"
      ],
      nameRules: [
        v => !!v || "Name is required",
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phoneNumberRules:[
        v => !!v || "Mobile is required",
      ],
      passwordRules:[
        v => (v && v.length >= 8) || "Password must be more than 8 characters",
        v => !!v || "Password is required",
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
    createNewUser(){

      const body = this.createUser;
      this.$axios.post('https://backendmxhacks.herokuapp.com/user', body)
        .then(() => this.$noty.success('Usuario creado correctamente'))
        .catch(err => {
          console.error(err);
          this.$noty.error('Se ha producido un error, inténtalo más tarde')
        })
    }
  }
};
</script>

<style scoped>
.container {
  min-width: 100%;
  height: 100vh;
  background-image: url("../../assets/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.opacidad {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.form {
  width: 100%;
  height: 100%;
  padding-right: 25%;
  padding-left: 25%;
  padding-top: 3%;
  margin: 10px;
}
#inspire {
  background: 0;
  padding-top: 3%
}
</style>



