<template>
  <div id="app">
    <div class="conment-container">
       <RightSide></RightSide>
      <AppHeader></AppHeader>
    </div>
      <router-view/>
  </div>
</template>

<script>
  import RightSide from '@/components/Right-Side'
  import AppHeader from '@/components/AppHeader'

  export default {
    name: 'App',
    components: {
      RightSide: RightSide,
      AppHeader: AppHeader
    },
  }
</script>

<style>


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
