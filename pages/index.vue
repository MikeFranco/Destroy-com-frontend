<template>
  <div>
    <Home/>
  <Footer />
  </div>
</template>

<script>
import Home from '~/components/home-cmpts/Home.vue';
import Footer from "~/components/generic-cmpts/Footer";

export default {
  components:{ Home, Footer },
  data(){
    return {
      missingPets: []
    }
  }
}
</script>
