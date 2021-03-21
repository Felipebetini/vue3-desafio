<template>
  <div class="main-content">
    <button @click="show = !show">Toggle</button>
    <transition
      enter-active-class="animated fadeIn zoomIn"
      leave-active-class="animated fadeOut zoomOut"
    >
      <img v-if="show" src="../assets/logo.png" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped></style>
