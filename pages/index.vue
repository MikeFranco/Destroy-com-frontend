<template>
  <div>
    <Home
      :missingPets="missingPets"
    />
  </div>
</template>

<script>
import Home from '~/components/home-cmpts/Home.vue';
export default {
  components:{ Home },
  data(){
    return {
      missingPets: []
    }
  }
}
</script>
