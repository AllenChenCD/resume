<template>
  <div id="app">
    <div class="conment-container">
      <div>
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
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
    mounted() {
      console.log("欢迎加入交群855260815")
    }
  }
</script>

<style>
  .section-right {
    right: 0;
  }

  .loader-section {
    position: fixed;
    top: 0;
    width:51vw;
    height: 100%;
    background: #a5bdbd;
    z-index: 1000;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  #loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FFF;
    animation: spin 1.5s linear infinite;
  }

  #loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FFF;
    animation: spin 3s linear infinite;
  }

  #loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    animation: spin 2s linear infinite;
  }

  #loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FFF;
    z-index: 1001;
  }

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
