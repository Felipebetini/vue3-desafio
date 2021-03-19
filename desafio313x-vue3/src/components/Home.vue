<template>
  <div class="divBig container-fluid">
    <div class="card1">
      <h3>This is option 1</h3>
      <p class="small">
        Aqui voltamos ao passado e falamos sobre algumas das violações de
        segurança para entendermos o futuro da segurança cibernetica.
      </p>
      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </div>
    <div class="card2">
      <h3>This is option 2</h3>
      <p class="small">
        Você está certo em pensar na segurança cibernética como uma questão
        bastante moderna, é quase impossível não estar ciente de sua
        importância.
      </p>

      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </div>

    <div class="card3">
      <h3>This is option 3</h3>
      <p class="small">
        Mas voce pode se surpreender com a extensão da história da segurança
        cibernética e do hacking.
      </p>
      <div class="dimmer"></div>
      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: all 0.3s ease-out;
}
.divBig {
  background: #132939;
  color: white;
  margin-top: 20px;
  text-align: center;
}
.h1Home {
  text-align: left;
}

h3 {
  color: #262626;
  font-size: 17px;
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
  font-size: 14px;
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
  background-color: #00838d;
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
  background: #00838d;
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
.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #ffffff;
}

.card2 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 80vh;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;
}
.card2:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -4px;
  border: 1px solid #cccccc;
  background-color: white;
}
.card2:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #00838d;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(2);
  transform-origin: 50% 50%;
  transition: transform 0.15s ease-out;
}
.card2:hover:before {
  transform: scale(2.15);
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
}
.card3:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #00838d;
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
