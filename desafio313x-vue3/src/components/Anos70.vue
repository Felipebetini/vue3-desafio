<template>
  <div class="page container-fluid">
    <div class="container-fluid">
      <h1 class="headAnos70">Nos Anos 70</h1>
    </div>
    <a
      class="history"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#history"
      aria-expanded="false"
      aria-controls="history"
    >
      <img
        class="computerSimp"
        src="https://media.giphy.com/media/citBl9yPwnUOs/giphy.gif"
      />
    </a>

    <div
      class="row"
      data-bs-toggle="collapse"
      data-bs-target="#extend"
      aria-expanded="false"
      aria-controls="extend"
    >
      <div class="col">
        <div class="collapse multi-collapse" id="history">
          <div class="card card-body">
            Com o intuito de facilitar a troca de informações, porque temiam
            ataques dos soviéticos, o Departamento de Defesa dos Estados Unidos
            (ARPA - Advanced Research Projects Agency) criou um sistema de
            compartilhamento de informações entre pessoas distantes
            geograficamente, a fim de facilitar as estratégias de guerra.
            <br />Nesse momento, surge o protótipo da primeira rede de internet,
            a Arpanet (Advanced Research Projects Agency Network). Assim, no dia
            29 de outubro de 1969 foi estabelecida a primeira conexão entre a
            Universidade da Califórnia e o Instituto de Pesquisa de Stanford.
            Foi um momento histórico, uma vez que o primeiro e-mail foi enviado
            <span class="arrowDown">&#8595;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="extend">
          <div class="card card-body">
            Na década de 70, quando uma das primeiras versões da Internet foi
            introduzida, a segurança não estava realmente embutida em sua
            receita, provavelmente porque ninguém mais tinha acesso, mas, como
            aprendemos, era apenas uma questão de tempo até aquela porta se
            abrir foi explorado. Decidimos criar uma linha do tempo abrangente
            dos principais marcos, reviravoltas e eventos que narram a longa
            história da segurança cibernética, para que possamos entender melhor
            como ela pode ser no futuro.
          </div>
        </div>
      </div>
    </div>
    <a
      class="acreeper"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#creeper"
      aria-expanded="false"
      aria-controls="creeper"
    >
      <img class="creeperImg" src="../assets/creeper.png" />
    </a>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="creeper">
          <div class="card card-body">
            Nossa história começa em 1971, quando a mensagem "Eu sou o
            rastejador, pegue-me se puder(I'm the creeper, cath me if you can)",
            gerou vários usuários da ARPANET, uma das primeiras formas de
            internet.<br />
            Este computador usado foi revolucionário na época, saltando entre
            computadores e exibindo mensagens. Este worm não tinha nenhuma
            intenção maliciosa, mas com certeza abriu caminho para uma tendência
            limitada que explorava as vulnerabilidades da Internet. futuro.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headAnos70 {
  background-color: #ca4246;
  background-image: linear-gradient(
    45deg,
    #ca4246 16.666%,
    #e16541 16.666%,
    #e16541 33.333%,
    #f18f43 33.333%,
    #f18f43 50%,
    #8b9862 50%,
    #8b9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #a7489b 83.333%
  );
  background-size: 14%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
}

.headAnos70:hover {
  animation: rainbow-text-simple-animation 0.5s ease-in forwards;
}

h1 {
  font-weight: normal;
  font-size: 10vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  padding: 2vh;
}

@keyframes rainbow-text-simple-animation-rev {
  0% {
    background-size: 650%;
  }
  40% {
    background-size: 650%;
  }
  100% {
    background-size: 100%;
  }
}

@keyframes rainbow-text-simple-animation {
  0% {
    background-size: 100%;
  }
  80% {
    background-size: 650%;
  }
  100% {
    background-size: 650%;
  }
}

.page {
  background: linear-gradient(-45deg, #200240, #200240, #2c015a, #3b0278);
  margin-top: 20px;
  height: 100vh;
}
h1 {
  font-family: "Chicle", cursive;
}
.computerSimp {
  float: left;
  border-radius: 6vh;
  height: 30vh;
  margin-top: 4vh;
}
.card {
  text-align: center;
  font-size: 2vh;
  font-family: "Quicksand", sans-serif;
}

.arrowDown {
  font-size: 3.5vh;
  cursor: pointer;
}
.arrowDown:hover {
  animation: bounce 5s infinite ease;
}

.creeperImg {
  float: right;
  height: 30vh;
  border-radius: 30px;
}
#creeper {
  margin-top: 5vh;
}

@media only screen and (max-width: 1800px) {
  .page {
    display: grid;
    height: auto;
  }
  .computerSimp {
    margin-bottom: 10vh;
  }
  a.history {
    margin: auto;
  }
  a.creeper {
    margin: auto;
  }
  .creeperImg {
    margin: auto;
    float: unset;
  }
}
@media only screen and (max-width: 380px) {
  .page {
    width: auto;
  }
}
</style>
