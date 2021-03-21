<template>
  <div class="page">
    <div class="divControl">
      <div class="div-white">
        <h1 class="ano-white">Anos 80</h1>
      </div>
      <div class="div-orange">
        <h1 class="ano-orange">Anos 80</h1>
      </div>
      <div class="div-red">
        <h1 class="ano-red">Anos 80</h1>
      </div>
      <div class="div-violet">
        <h1 class="ano-violet">Anos 80</h1>
      </div>
      <div class="div-blue">
        <h1 class="ano-blue">Anos 80</h1>
      </div>
      <div class="div-green">
        <h1 class="ano-green">Anos 80</h1>
      </div>
      <div class="div-yellow">
        <h1 class="ano-yellow">Anos 80</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  background: blueviolet;
  margin-top: 20px;
  height: 100vh;
}

.divControl {
  font-size: 4vh;
}

.div-white {
  margin: auto;
  width: 100%;
  height: 100px;
  position: relative;
  animation: div-control 2s infinite ease;
  animation-direction: alternate;
  color: yellow;
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
  transform: translateY(-100px);
  color: green;
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
  transform: translateY(-200px);
  color: blue;
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
  transform: translateY(-300px);
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
  transform: translateY(-400px);
  color: red;
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
  transform: translateY(-500px);
  color: orange;
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
  transform: translateY(-600px);
  color: white;
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
</style>
