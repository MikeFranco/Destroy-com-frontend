<template>
  <section class="container">
    <div class="opacidad">
      <v-app id="inspire">
        <v-form class="form" ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="createPet.name" :rules="nameRules" label="Nombre" required></v-text-field>

          <v-text-field v-model="createPet.age" :rules="ageRules" label="Edad" required></v-text-field>

          <v-text-field v-model="createPet.description" :rules="descriptionRules" label="Descripción de tu compañero" required></v-text-field>

          <v-btn color="#B21779" class="mr-4" @click="reset">Reset Form</v-btn>
          <v-btn color="#678BEC" class="mr-4" @click="createNewPet">Crear Usuario</v-btn>
          <v-btn color="white" class="mr-4 exit-btn " @click="showDogsForm"> <font color="black"> Salir </font></v-btn>

        </v-form>
      </v-app>
    </div>
  </section>
</template> 

<script>
export default {
  props:['showDogsForm'],
  data() {
    return {
      bckImg: require("../../assets/ImagenRegistrarse-05.png"),
      valid: true,
      createPet:{
        name: "",
        age: '',
        description: ''
      },
      nameRules: [
        v => !!v || "Name is required",
      ],
      ageRules: [
        v => !!v || "Age is required",
      ],
      descriptionRules: [
        v => !!v || "Description is required",
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
    createNewPet(){
      const body = this.createPet;
      this.$axios.post('/back/user', body)
        .then(() => this.$noty.success('Usuario creado correctamente'))
        .catch(err => {
          console.error(err);
          this.$noty.error('Se ha producido un error, inténtalo más tarde')
        })
    },
    exitDogsForm(){

    }
  },
};
</script>

<style scoped>
.container {
  min-width: 33%;
  height: 500px;
  background-image: url("../../assets/login.jpg");
  background-position: center;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.exit-btn{
  color: white;
}
.opacidad {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.form {
  min-width: 100%;
  min-height: 100%;
  padding-right: 25%;
  padding-left: 25%;
  padding-top: 3%;
  margin: 10px;
}
#inspire {
  background: 0;
  padding-top: 3%;
  width: 1000px;
  max-height: 300px;
}
</style>



