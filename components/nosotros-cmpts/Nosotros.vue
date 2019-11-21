<template>
  <section>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="../../assets/Adrian.jpeg" alt="Adrián" style="width:100%" />
          <div class="container">
            <h2>Adrían García Juárez</h2>
            <p class="title">CEO</p>
            <p class="adr-p">
              Soy muy bueno en contabilidad y la programación, en mis tiempos
              libres me gusta hacer ejercicio, jugar tochito y escuchar música.
              También soy bueno organizando equipos para concluir tareas y
              proyectos. Me gusta salir al cine y programar páginas web.
            </p>
            <!-- <p>example@example.com</p> -->
            <p class="adr-btn" ><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img
            src="../../assets/MikeFranco.jpg"
            alt="Mike"
            style="width:100%"
          />
          <div class="container">
            <h2>Miguel Ángel Franco Peza</h2>
            <p class="title">CTO & Web Developer</p>
            <p class="mike-p" >
              Me gusta hacer ejercicio (crossfit y fútbol), escuchar música y
              jugar videojuegos. Soy bastante bueno como desarrollador web,
              tanto en front, back y un poco en DevOps
            </p>
            <!-- <p>example@example.com</p> -->
            <p class="mike-btn" ><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img
            src="../../assets/Juan.jpeg"
            alt="Juan Dávalos"
            style="width:100%"
          />
          <div class="container">
            <h2>Juan Francisco Vazquez Davalos</h2>
            <p class="title">Diseñador</p>
            <p>
              Me gusta jugar futbol y salir con mis amigos, también escuchar
              música y leer de vez en cuando. Me agrada socializar y ser
              cumplido en las tareas que se me cruzan. Soy bueno en la
              programación de aplicaciones móviles y bueno en un poco en todo
            </p>
            <!-- <p>example@example.com</p> -->
            <p class="juan-btn" ><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img
            src="../../assets/Ahcel.jpg"
            alt="Ahcel Torres Fragoso"
            style="width:100%"
          />
          <div class="container">
            <h2>Ahcel Torres Fragoso</h2>
            <p class="title">UX/UI</p>
            <p>
              Mi pasatiempo favorito es bailar de cualquier tipo (danza
              folklorica, tango, salsa, entre otros), me gusta ser autodidacta y
              muy responsable. Soy bueno en el baile y en materias de
              matemáticas, contabilidad y programación.
            </p>
            <!-- <p>example@example.com</p> -->
            <p class="ahcel-btn" ><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 900px;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
  margin-bottom: 5px;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

h2 {
  padding-top: 12px;
  padding-bottom: 15px;
  text-align: center;
}

p{
  text-align: center;
  padding: 2px;
}

.adr-btn {
  margin-top: 104px;
}

.adr-p {
  margin-top: 31px;
}

.mike-btn {
  margin-top: 85px;
}

.mike-p {
  margin-top: 30px;
}

.juan-btn {
  margin-top: 8px;
}

.ahcel-btn {
  margin-top: 9px;
}
</style>
