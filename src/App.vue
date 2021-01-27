<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
  #app{
    height: 100vh;
    overflow: auto;
  }
</style>
