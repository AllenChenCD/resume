<template>
  <div id="app">
    <div class="conment-container">
       <RightSide></RightSide>
      <AppHeader></AppHeader>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
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
    mounted(){
      console.log("欢迎加入交群855260815")
    }
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
