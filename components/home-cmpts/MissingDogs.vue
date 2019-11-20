<template>
  <section>
    <div class="dog-card">
      <div :style='`background-image: url(${dog.img})`' class="dog-image" >
      </div>
        <div class="dog-name" > {{dog.name}} </div>
        <div class="here-map" >
          <div class="col-1">
            <div style="display: flex;" > <h3>Edad:&nbsp;</h3> <p style="padding-top:3px;" >{{ dog.age }}</p> </div>
            <div style="display: flex;" > <h3 style="padding-top: 5px;" >Talla:&nbsp;</h3> <p style="padding-top:7px;" >{{ dog.size }}</p> </div>
          </div>
          <div class="col-2">
            <h3>Descripción: </h3><p> {{dog.description}} </p>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import Map from '../generic-cmpts/Map.vue';
export default {
  components: { Map },
  props:['dog']

}
</script>

<style scoped>

.dog-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  border-radius: 30px;
  overflow: hidden;
  text-align: center;
}

.dog-image {
  margin: auto auto;
  min-height: 200px;
  background-position: center;
  background-size: cover;
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
  display: flex;
  background-color: white;
}

.col-1 {
  text-align: left;
  width: 50%;
  font-size: 18px;
  padding: 3%
}

.col-2 {
  right: 5px;
  width: 50%;
  text-align: right;
  padding-left: 50%;
}

</style>