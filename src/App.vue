<template>
  <div id="app">
    <div class="banner">
      Linewriter
    </div>
    <Page></Page>
  </div>
</template>

<script>
import Page from './components/Page.vue'

export default {
  name: 'App',
  components: {
    Page
  }
}
</script>

<style>
#app {
  font-family: Barlow, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.banner {
  flex: 0 0 auto;
  width: 100%;
  height: 36px;
  background: #dc2565;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
