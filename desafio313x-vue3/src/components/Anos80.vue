<template>
  <div class="page container-fluid">
    <div class="divControl container-fluid">
      <div class="div-white container-fluid">
        <h1 class="ano ano-white">Anos 80</h1>
      </div>
      <div class="div-orange container-fluid">
        <h1 class="ano ano-orange">Anos 80</h1>
      </div>
      <div class="div-red container-fluid">
        <h1 class="ano ano-red">Anos 80</h1>
      </div>
      <div class="div-violet container-fluid">
        <h1 class="ano ano-violet">Anos 80</h1>
      </div>
      <div class="div-blue container-fluid">
        <h1 class="ano ano-blue">Anos 80</h1>
      </div>
      <div class="div-green container-fluid">
        <h1 class="ano ano-green">Anos 80</h1>
      </div>
      <div class="div-yellow container-fluid">
        <h1 class="ano ano-yellow">Anos 80</h1>
      </div>
    </div>

    <div class="wrapper container-fluid">
      <div class="card">
        <img src="../assets/ddos.png" />
        <div class="info">
          <h1>Sem querer..</h1>
          <p>
            Em 1989, ocorreu o primeiro ataque denial-of-service(DoS) registrado
            na história. Robert Morris criou um worm que reduziu drasticamente a
            velocidade e a funcionalidade da Internet. Originalmente, ele não
            foi projetado com nenhuma intenção prejudicial, mas sim achar falhas
            de segurança, mas o desastre aconteceu quando uma falha em seu
            código o fez se replicar excessivamente, causando danos extensos de
            toda a Internet que durou dias.
          </p>
        </div>
      </div>
      <div class="card container-fluid">
        <img src="../assets/floppy.png" />
        <div class="info">
          <h1>De porta em porta</h1>
          <p>
            Naquele mesmo ano, ocorreu o primeiro ataque de ransomware
            conhecido. Embora mal projetado e facilmente removido, o cavalo de
            Tróia da AIDS foi criado por Joseph Popp para extorquir dinheiro.
            Este malware foi distribuído em disquete por uma correspondência de
            porta a porta.
          </p>
        </div>
      </div>
      <div class="card container-fluid">
        <img src="../assets/uk.png" />
        <div class="info">
          <h1>Save the Queen</h1>
          <p>
            Felizmente, um dia depois, uma lei foi aprovada no Reino Unido que
            tornou ilegal qualquer acesso não autorizado ao seu sistema de
            computador. Esse ato não apenas trouxe a gravidade do crime
            cibernético para o primeiro plano, mas também se tornou a base para
            as proteções de segurança cibernética, até hoje corrigidas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(59, 2, 120, 1) 50%,
    rgba(75, 1, 154, 1) 100%
  );
  margin-top: 20px;
  height: 100vh;
}
.ano {
  font-size: 5.5rem;
  cursor: default;
}
.divControl {
  height: 36vh;
}

.div-white {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control ease 2s infinite;
  animation-direction: alternate;
  transform: translateY(141px);
  z-index: 7;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.div-orange {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  animation-delay: 200ms;
  transform: translateY(26px);
  z-index: 6;
  color: orange;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.div-red {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  animation-delay: 300ms;
  transform: translateY(-95px);
  z-index: 5;
  color: red;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.div-violet {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  animation-delay: 400ms;
  transform: translateY(-216px);
  z-index: 4;
  color: violet;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.div-blue {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  animation-delay: 500ms;
  transform: translateY(-337px);
  z-index: 3;
  color: blue;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.div-green {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  animation-delay: 600ms;
  transform: translateY(-458px);
  z-index: 2;
  color: green;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.div-yellow {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  animation-delay: 700ms;
  transform: translateY(-579px);
  z-index: 1;
  color: yellow;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black, 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.ano-white {
  font-family: "Monoton", cursive;
}
.ano-orange {
  font-family: "Monoton", cursive;
}
.ano-red {
  font-family: "Monoton", cursive;
}
.ano-violet {
  font-family: "Monoton", cursive;
}
.ano-blue {
  font-family: "Monoton", cursive;
}
.ano-green {
  font-family: "Monoton", cursive;
}
.ano-yellow {
  font-family: "Monoton", cursive;
}

.ano-white:hover {
  color: yellow;
  text-shadow: 10px 10px 10px orangered;
}
.ano-orange:hover {
  color: green;
  text-shadow: 5px 5px 5px green;
}
.ano-red:hover {
  color: blue;
  text-shadow: 5px 5px 5px blue;
}
.ano-violet:hover {
  color: purple;
  text-shadow: 5px 5px 5px purple;
}
.ano-blue:hover {
  color: red;
  text-shadow: 5px 5px 5px red;
}
.ano-green:hover {
  color: orange;
  text-shadow: 5px 5px 5px slateblue;
}
.ano-yellow:hover {
  color: white;
  text-shadow: 5px 5px 5px yellow;
}

@keyframes div-control {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}

@keyframes div-orange {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}
@keyframes div-red {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}
@keyframes div-violet {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}
@keyframes div-blue {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}
@keyframes div-green {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}
@keyframes div-yellow {
  0% {
    top: 0px;
  }

  100% {
    top: 50px;
  }
}

.wrapper {
  display: flex;
  width: 90%;
  margin: auto;
}

.card {
  width: 45vh;
  height: 45vh;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
}
.card:hover {
  transform: translateY(20px);
}
.card:hover:before {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.card img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.card .info {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
}
.card .info h1 {
  margin: 0px;
}
.card .info p {
  letter-spacing: 1px;
  font-size: 1.8vh;
  margin-top: 8px;
}
.card .info button {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
}
.card .info button:hover {
  background: dodgerblue;
  color: white;
}

@media only screen and (max-width: 1000px) {
  .page {
    width: auto;
    height: auto;
  }
  .wrapper {
    display: grid;
  }
  .card {
    margin-top: 20px;
  }
}
</style>
