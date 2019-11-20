<template>
  <section>
    <div class="dog-card">
      <div :style='`background-image: url(${dog.img})`' class="dog-image" >
      </div>
      <div class="dog-text" >
        <h4>Nombre: </h4> <span>{{dog.name}}</span>
        <h4>Edad: </h4> <span>{{ dog.age }} años</span>
        <h4>Descripción: </h4> <span>{{dog.description}}</span>
      </div>
      <div class="here-map">
        <Map
            appId="DPVmzC3KXrz9Bk3wzpfR"
            appCode="xpxcR1OHlqPK043UfzNHZQ"
            lat="19.33140"
            :lng="`-99.1${changeLg}462`"
            width="120%"
            height="200px"
          />
      </div>
    </div>
  </section>
</template>

<script>
import Map from '../generic-cmpts/Map.vue';
export default {
  components: { Map },
  props:['dog', 'changeLg','showMap']

}
</script>

<style scoped>

.dog-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  border-radius: 30px;
  overflow: hidden;
  text-align: center;
  display: flex;
  width: 800px;
}

.dog-image {
  margin: auto auto;
  height: 200px;
  background-position: center;
  background-size: cover;
  min-width: 33%;
  align-items: left;
}

h4 {
  padding: 12px;
}

.dog-text {
  flex:1;
  background-color: #678BEC;
  color: white;
  min-width: 280px;
}

.dog-name {
  background-color: #B21779;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 25px;
}

.here-map {
  min-width: 100%;
}

</style>