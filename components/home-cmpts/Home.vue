<template>
  <section>
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="logo-div">
      <img
        src="../../assets/destroycom-logo.jpeg"
        alt="destroycom"
        class="destroycom-logo"
      />
    </div>
    <div class="first-screen">
      <h1 class="main-txt">¿Tu empresa necesita mejor conectividad?</h1>
    </div>

    <div class="icons" >
      <div class="icon" >
        <img
          src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/01.png"
          data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/01.png"
          width="150"
          height="150"
          alt="Image module"
        />
        <h3>Prueba</h3>
      </div>
    <img
      src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/02.png"
      data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/02.png"
      width="150"
      height="150"
      alt="Image module"
    />
    <img
      src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/06.png"
      data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/06.png"
      width="150"
      height="150"
      alt="Image module"
    />
    <img
      src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/03-1.png"
      data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/03-1.png"
      width="150"
      height="150"
      alt="Image module"
    />
    <img
      src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/04-1.png"
      data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/04-1.png"
      width="150"
      height="150"
      alt="Image module"
    />
    <img
      src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/05-1.png"
      data-src="https://dmd.com.mx/new-dmd/wp-content/uploads/2019/08/05-1.png"
      width="150"
      height="150"
      alt="Image module"
    />
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
import NavBar from "~/components/generic-cmpts/NavBar.vue";

export default {
  components: { NavBar },
  props: ["missingPets"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.main-txt{
  color: white;
  font-size: 60px;
  padding-top: 10px;
}
.first-screen {
  background-image: url("../../assets/servidor.jpg");
  text-align: center;
  min-height: 700px;
  opacity : 0.3;
}

.nav-bar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.destroycom-logo {
  max-width: 130px;
  margin-top: 8px;
  margin-left: 10px;
}

.icons {
  margin-top: 50px;
}

.icon {
  display: inline;
}

img {
  margin-left: 130px;
  /* margin-right: 50px; */
}
</style>
