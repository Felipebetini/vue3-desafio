<template>
  <div class="divBig container-fluid">
    <div class="card1" @click="show1 = !show1">
      <h1 class="headCard">A história da Ciber segurança.</h1>
      <p class="small">
        Aqui voltamos ao passado e falamos sobre algumas das violações de
        segurança para entendermos o futuro da segurança cibernetica.
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeInRight"
    >
      <div class="card2" v-if="show1" @click="show2 = !show2">
        <h1 class="headCard">Um problema atual?</h1>
        <p class="small">
          Você está certo em pensar na segurança cibernética como uma questão
          bastante moderna, é quase impossível não estar ciente de sua
          importância.
        </p>
        <div class="go-corner">
          <div class="go-arrow">←</div>
        </div>
      </div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeInRight"
    >
      <div class="card3" v-if="show2">
        <h1 class="headCard">Não tanto quanto imaginas!</h1>
        <p class="small">
          Mas voce pode se surpreender com a extensão da história da segurança
          cibernética e do hacking.
        </p>
        <div class="dimmer"></div>
        <div class="go-corner">
          <div class="go-arrow"></div>
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
    };
  },
};
</script>

<style scoped>
* {
  transition: all 0.3s ease-out;
}
.divBig {
  background: linear-gradient(-45deg, #200240, #200240, #2c015a, #3b0278);
  color: white;
  margin-top: 20px;
  text-align: center;
  height: 91.7vh;
  padding: 6vh;
  animation: Animatedgradient 10s ease infinite;
  -webkit-animation: Animatedgradient 10s ease infinite;
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.h1Home {
  text-align: left;
}

.headCard {
  color: #262626;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
}
p.small {
  font-size: 2.5vh;
  margin-top: 4vh;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #4b019a;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  position: relative;
  max-width: 80vh;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}
.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #4b019a;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}
.card1:hover:before {
  transform: scale(100);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
.card1:hover .headCard {
  transition: all 0.3s ease-out;
  color: #ffffff;
}

.card2 {
  position: relative;
  max-width: 80vh;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  float: right;
}
.card2:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #3b0278;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}
.card2:hover:before {
  transform: scale(100);
}

.card2:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
.card2:hover .headCard {
  transition: all 0.3s ease-out;
  color: #ffffff;
}

.card3 {
  position: relative;
  max-width: 80vh;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  top: 15vw;
}
.card3:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #4b019a;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}
.card3:hover:before {
  transform: scale(100);
}

.card3:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
.card3:hover h3 {
  transition: all 0.3s ease-out;
  color: #ffffff;
}
</style>
