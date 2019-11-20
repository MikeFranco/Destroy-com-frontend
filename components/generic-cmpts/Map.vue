<template>
  <div class="here-map">
     <div ref="map" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
export default {
  props: {
    appId: String,
    appCode: String,
    lat: String,
    lng: String,
    width: String,
    height: String
  },
  data(){
    return {
       map: {},
      platform: {}
    }
  },
  created() {
    this.platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode,
      "useCIT": true,
      'apikey': "GLsjeeyHBe9ZOU0V1O6NaL9fe_BXXctpZeE7imjxJu0",
      "useHTTPS": true
    });
  },
  mounted() {
    this.map = new H.Map(
      this.$refs.map,
      this.platform.createDefaultLayers().normal.map,{
        zoom: 15,
        center: { lng: this.lng, lat: this.lat }
      }
    );
}
}
</script>

<style>

</style>