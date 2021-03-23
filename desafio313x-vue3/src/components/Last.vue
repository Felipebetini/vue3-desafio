<template>
  <div class="page container-fluid">
    <div class="divText1 container-fluid">
      <p class="text1 container-fluid">
        Hoje, o cibercrime parece fazer parte da vida cotidiana. Ao longo das
        décadas, vimos worms se transformarem em vírus, viroses inspiram
        software de segurança cibernética para o consumidor, o nascimento de
        grupos ativistas e nações que realizam esforços coordenados de crimes
        cibernéticos inteiros Antes, os limites estavam sendo testados para fins
        de pesquisa acadêmica; hoje, hacks ameaçam eleições democráticas
        inteiras e ataques patrocinados pelo Estado se tornaram um pilar das
        manchetes globais.
      </p>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      mode="out-in"
    >
      <div class="divText2 container-fluid" v-show="showText">
        <p class="container-fluid">
          Se o passado nos ensinou alguma coisa, é que os cibercriminosos estão
          crescendo e evoluindo tão exponencialmente quanto a própria Internet,
          e é apenas uma questão de tempo até que os ciberataques exponham ainda
          mais tecnologias emergentes como IA e aprendizado de máquina
          Infelizmente, temos um longo caminho a percorrer antes de viver em um
          mundo de segurança cibernética, e isso provavelmente requer mais
          pesquisas e esforços para reduzir o crime cibernético e minimizar os
          efeitos sempre que possível.
        </p>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      mode="out-in"
    >
      <div class="contato container-fluid" v-show="contato">
        <h1>Voce pode se proteger tambem!</h1>
        <p>
          Se você ou sua empresa estão sendo hackeados ou sofraram qualquer tipo
          de ataque cibernético entre em contato conosco clicando abaixo!
        </p>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      mode="out-in"
    >
      <div class="container-fluid">
        <button class="btn btn-info" @click="empresa" v-show="btnContato">
          Fale Conosco!
        </button>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__slideInUp"
      mode="out-in"
    >
      <div class="footer container-fluid" v-show="footer">
        <p>Desenvolvido por Felipe Betini</p>
        <img class="avatar" src="../assets/avatar.png" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    empresa: function () {
      window.open("https://313x.com.br/");
    },
  },
  data() {
    return {
      showText: false,
      contato: false,
      btnContato: false,
      footer: false,
    };
  },

  created() {
    setTimeout(() => (this.showText = true), 1500);
    setTimeout(() => (this.contato = true), 2300);
    setTimeout(() => (this.btnContato = true), 4000);
    setTimeout(() => (this.footer = true), 5500);
  },
};
</script>

<style scoped>
.page {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  height: 100vh;
  margin-top: 30px;
}

.text1,
.text2 {
  width: 100%;
}
.divText1,
.divText2 {
  height: 25vh;
  width: 180vh;
  margin: auto;
  text-align: center;
  font-size: 3vh;
  padding: 2vh;
  color: rgba(255, 255, 255, 0.534);
}

.contato {
  width: 180vh;
  margin: auto;
  margin-top: auto;
  text-align: center;
  font-size: 3vh;
  padding: 2vh;
  margin-top: 5vh;
  color: rgba(255, 255, 255, 0.534);
}

.divText1:hover,
.divText2:hover,
.contato:hover {
  text-shadow: 0.5px 0.5px 0.5px #136fcc;
}

.footer {
  height: 10vh;
  background: #200240;
  margin-top: 6vh;
  color: white;
}
.avatar {
  height: 5vh;
  width: 5vh;
  transform: translateY(-2vh);
}
.btn:hover {
  background: #136fcc;
  color: white;
}
@media only screen and (max-width: 380px) {
  .page {
    width: auto;
  }
  .div1,
  .divText1,
  .divText2,
  .contato {
  }
}
</style>
