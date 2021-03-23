<template>
  <!--Menu principal com as navs-->
  <div class="content container-fluid">
    <router-link to="/"> Home </router-link>
    <!--cada router esta vinculado com o animated.css no arquivo index.js-->
    <router-link to="/anos70">Anos 70 </router-link>
    <router-link to="/anos80">Anos 80 </router-link>
    <router-link to="/anos90">Anos 90 </router-link>
    <router-link to="/anos00">Anos 00 </router-link>
    <router-link to="/last">Hoje</router-link>
    <!--router exportado pelo array de objetos do router passando para o "component" com seu respectivo nome e animate.css -->
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
@media only screen and (max-width: 1800px) {
  body {
    overflow: visible;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "MuseoModerno", cursive;
}

.imgCenter {
  border-radius: 50%;
  margin: auto;
}

.content {
  margin: 0 auto;
  position: relative;
  background: #070211;
  padding-top: 2em;
  text-align: center;
}

a {
  font-weight: bold;
  color: white;
  text-decoration: none !important;
  margin-right: 4.5em;
  margin-left: 4.5em;
}

a:hover {
  color: #4b019a;
  font-size: 18px;
}

a.router-link-active {
  border-bottom: 2px solid #4b019a;
  animation: blinkingText 2s linear infinite;
  font-size: 20px;
}

@keyframes blinkingText {
  50% {
    opacity: 0.2;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

@media only screen and (max-width: 800px) {
  .content {
    display: grid;
  }
}
@media only screen and (max-width: 1800px) {
  .content {
    display: grid;
  }
}
</style>
