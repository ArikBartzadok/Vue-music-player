<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "App"
};
</script>
