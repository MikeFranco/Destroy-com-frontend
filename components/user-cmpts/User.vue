<template>
  <section>
    <div class="nav-bar">
      <UserNavBar/>
    </div>
    <section class="user-container" >
      <div class="user-info">
        <img class="user-img" :src="user.img" :alt="user.name">
        <div class="user-full-name" >
          <span class="user-name" > {{ user.name }} </span><br/>
          <span class="user-last-name"> {{ user.lastName }} </span>
        </div>
      </div>
      <div class="global-dog-container" >
        <div class="row dog-card-container" v-if="user.pets && user.pets.length > 0">
            <DogInfo
              class="col-md-8 align-items-stretch "
              v-for="(dog, index) in user.pets"
              :key="index"
              :changeLg="index"
              :dog="dog"
            />
            <entry-new-pet :showDogsForm="showDogsForm" />
        </div>
         <div v-else>
          <entry-new-pet :showDogsForm="showDogsForm" />
          <entry-new-pet :showDogsForm="showDogsForm" />
          <entry-new-pet :showDogsForm="showDogsForm" />
        </div>
        <div v-if="entryNewPet" class="dog-form">
          <DogForm :showDogsForm="showDogsForm"/>
        </div>
       
      </div>
    </section>
  </section>
</template>

<script>
import UserNavBar from '../generic-cmpts/UserNavBar.vue';
import DogInfo from '../generic-cmpts/DogInfo.vue';
import DogForm from './DogForm';
import EntryNewPet from '../generic-cmpts/EntryNewPet.vue'

export default {
  components: { UserNavBar, DogInfo, DogForm, EntryNewPet },
  //props:['user'],
  data() {
    return {
      entryNewPet: false,
      user:{
        name: 'Mariana',
        lastName: 'Ruiz de Chávez Tamayo',
        img: require('../../assets/Mariana.jpeg'),
        pets:[
          {name: 'Koda', age: 5, size: 'Grande',
          description: 'Pastor Belga Malinois, cafe con pecho negro', img:require('../../assets/Koda.jpg')},
          {name: 'Manchas', age: 1, size: 'Pequeño',
          description: 'Boston terrier', img:require('../../assets/perrito1.jpg')},
          {name: 'Link', age: 3, size: 'Pequeño',
          description: 'Maltipo blanco', img:require('../../assets/perrito2.jpg')},
          {name: 'Negro', age: 7, size: 'Grande',
          description: 'Whippet, cafe con pecho blanco', img:require('../../assets/perrito3.jpg')}
      ],
      }
    }
  },
  methods: {
    showDogsForm(){
      this.entryNewPet = !this.entryNewPet;
    }
  }


}
</script>

<style scoped>
.entry-new-pet-button {
  background-color: #B21779;
  border-radius: 30px;
  font-size: 30px;
  padding: 40px;
  margin: 10px;
  color: white;
}

.user-img {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;

}

.dog-form{
  width: 100%;
  padding: 0;
  margin: 0;
}

.user-name{
  font-size: 50px;
}

.user-last-name {
  font-size: 25px;
}

.user-pets {
  background-color: #678BEC;
}

.user-container {
  display: flex;
  padding-top: 5%
}

.user-full-name {
  text-align: center;
}

.user-info {
  width: 50%;
  padding-left: 10%;
}

.global-dog-container {
  padding-right: 0;
  padding-left: 15%;
}

/* CSS del componente de home */
.nav-bar {
  background-color:  #678BEC;
  color: white;
  max-width: 100%;
}

.active{
  color: #678BEC;
}

.dog-card-container{
  max-height: 500px;
  width: 100%;
  overflow-y: auto;
  align-items: center;
}
.main-btn-left {
  margin-left: 18%
}

.main-btn-center,
.main-btn-right {
  margin-left: 25%
}

.missing-dogs-title {
  text-align: center;
  font-size: 38px;
  color: white;
  background-color: #678BEC;
  margin-top: 2%;
  padding-top: 1%;
  padding-bottom: 0.7%;
}

/* .main-btn-center:hover,
.main-btn-right:hover,
.main-btn-left:hover{
  background-color: #678BEC;
} */

.first-screen-img {
  max-width: 100%;
  max-height: 25%;
}

.div-main-btns {
  text-align: center;
}

button{
  border-radius: 50px;
}

</style>