<template>
  <section>
    <div class="nav-bar">
      <NavBar/>
    </div>
    <div class="logo-div" >
    <img src="../../assets/destroycom-logo.jpeg" alt="destroycom" class="destroycom-logo">
    </div>
    <h1 class="adopt-title" >¡ADOPTA A UN COMPAÑERO!</h1>
    <div class="back" >
      <h1>¿Su organización necesita mejor conectividad?</h1>
    </div>
    <!-- <div class="adopt">
      <DogInfoHome
        class="col-md-4 d-flex align-items-stretch "
        v-for="(dog, index) in hardcodedItems"
        :key="index"
        :dog="dog"
        :showMap="false"
      />
    </div> -->
  </section>
</template>

<script>
import NavBar from '~/components/generic-cmpts/NavBar.vue';
import MissingDogs from '~/components/home-cmpts/MissingDogs.vue';
import DogInfoHome from '~/components/generic-cmpts/DogInfoHome.vue';

export default {
  components: { NavBar, MissingDogs, DogInfoHome },
  props:['missingPets'],
  data(){
    return {
      pawIcon: 'mdi-paw',
      alertIcon: 'mdi-alert',
      homeIcon: 'mdi-home',
      hover: false,
      hardcodedItems:[
          {name: 'Koda', age: 5, size: 'Grande',
          description: 'Pastor Belga', img:require('../../assets/Koda.jpg')},
          {name: 'Manchas', age: 1, size: 'Pequeño',
          description: 'Boston terrier', img:require('../../assets/perrito1.jpg')},
          {name: 'Link', age: 3, size: 'Pequeño',
          description: 'Maltipo blanco', img:require('../../assets/perrito2.jpg')},
          {name: 'Negro', age: 7, size: 'Grande',
          description: 'Whippet café', img:require('../../assets/perrito3.jpg')}
      ],
    }
  }
}
</script>

<style scoped>
.back {
  background-color: red;
  min-height: 50000px;
  margin-left: 50px;
  margin-right: 50px;
  text-align: center;
}

.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}


.destroycom-logo{
  max-width: 130px;
  margin-top: 8px;
  margin-left: 10px;

}


</style>