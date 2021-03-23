<template>
  <div class="page complete container-fluid">
    <div class="pink">
      <div class="img90 cointainer-fluid">
        <img class="nintendo" src="../assets/nintendo.png" />
      </div>
      <div
        class="head90"
        @click="(show1 = !show1), (welcome = !welcome), (coin = !coin)"
      >
        <h1>Anos 90</h1>
        <p v-if="coin"><I>insert coin</I></p>
        <p v-if="welcome">Welcome!</p>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="blue" v-if="show1">
        <div class="blackDivBlue" @click="show2 = !show2">
          <h1>Ah! Os anos 90</h1>
          <p>
            Macarena e o Nokia clássico entraram em cena em 1995, mas você sabia
            que este era o ano de nascimento do SSL contemporâneo? O Secure
            Socket Layer é um protocolo de Internet que criptografa a
            comunicação entre seu dispositivo de computação e seu destino
            online.
          </p>
          <p class="arrowLeft">←</p>
        </div>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="yellow" v-if="show2" @click="show3 = !show3">
        <div class="blackDivYellow">
          <h1>Ah! Os anos 90</h1>
          <p>
            A versão SSL 2.0 que foi lançada em '95, foi um alicerce para o
            Hypertext Transfer Protocol Secure, mais conhecido como HTTPS, que
            você verá frequentemente no início de endereços da web quando
            estiver navegando com segurança.
          </p>
          <p class="arrowRight">→</p>
        </div>
      </div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="dots" v-if="show3">
        <div class="blackDivDot">
          <h1>Ah! Os anos 90</h1>
          <p>
            Com o lançamento do Windows 98 em 19999, a cibersegurança,
            juntamente com a computação casual do dia-a-dia, se tornou popular.
            O grande aumento no uso de computadores com esse sistema operacional
            abriu o caminho para um host de software de segurança. O Windows
            lançou uma série de partches para melhorar a proteção de seu
            software enquanto a produção de software anti-hacking para
            computadores domésticos florescia.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      welcome: false,
      coin: true,
    };
  },
};
</script>

<style scoped>
.nintendo {
  color: white;

  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
}
.head90 {
  transform: translate(8vh, -21vh);
  text-shadow: 2px 2px 5px yellow;
  font-family: "Press Start 2P", cursive;
  color: yellow;
  animation: flash 2s infinite;
  cursor: pointer;
}

.page {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: grid;
  font-family: "Trebuchet MS", sans-serif;
  height: 100vh;
  margin-top: 30px;
}
.img90 {
  transform: translateX(70px);
  width: 100%;
  padding-top: 26px;
}

.complete .blue {
  background-color: #4cc9c8;
  grid-column: 8 / span 5;
  grid-row: 1 / span 4;
}
.complete .yellow {
  background-color: #f1ef1c;
  grid-column: 1 / span 7;
  grid-row: 1 / span 4;
}
.complete .pink {
  background-color: #fa001a;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  grid-row: 1 / span 3;
  grid-column: 1 / span 11;
  position: relative;
  z-index: 2;
}
.complete .dots {
  background: radial-gradient(#fa001a 20%, transparent 19%),
    radial-gradient(#fa001a 20%, transparent 19%), transparent;
  background-size: 50px 50px;
  background-position: 0 0, 3px 3px;
  grid-column: 1 / span 12;
  grid-row: 3 / span 2;
  margin: 0 0 15px 20px;
  z-index: 1;
}

.blackDivBlue {
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
  height: 30vh;
  width: 62vh;
  position: relative;
  margin: auto;
  margin-top: 18vh;
  margin-right: 1vh;
}
.arrowLeft,
.arrowRight {
  font-size: xx-large;
  cursor: pointer;
}

.blackDivYellow {
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
  height: 30vh;
  width: 62vh;
}
.blackDivDot {
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
  height: 30vh;
  width: 62vh;
  margin: auto;
  transform: translate(30vh, 9.4vh);
}
.blackDivYellow {
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
  height: 30vh;
  width: 62vh;
  margin: auto;
  position: fixed;
  top: 68vh;
  margin-left: 8vh;
}
</style>
