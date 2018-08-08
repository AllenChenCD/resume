<template>
  <div class="am-hide-sm-only right-side-container">
    <div>
      <ul class="right-ul">
        <router-link to="/" exact tag="li">
          <i class="am-icon-home"></i>
          首页
        </router-link>
        <router-link to="/about" tag="li">
          <i class="am-icon-user"></i>
          关于
        </router-link>
        <router-link to="/test" tag="li">
          <i class="am-icon-product-hunt"></i>
          项目
        </router-link>
        <router-link to="/contact" tag="li">
          <i class="am-icon-connectdevelop"></i>
          联系
        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "right-side",
    data() {
      return {
        // active: 1
      }
    },
    created: function () {
      // this.active = this.$route.params.id
      // console.log(this.$route.params.id)
    },
    methods: {
      chec_nav: function () {
        var index_num = $(".is-active").parent().index();
        this.active = index_num;
        console.log(index_num)
      },
      jump: function (des) {
        $(this).addClass("test-active")
        window.location.href = des
      }
    }
  }
</script>

<style>
  .right-ul {
    padding-left: 0;
    padding-right: 10px;
  }

  .right-side {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100vh;
    width: 75%;
    z-index: 100;
  }

  .right-side-container {
    height: 300px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 10
  }

  .right-ul > li {
    position: relative;
    display: block;
    margin-bottom: 10px;
    padding-bottom: 5px;
    cursor: pointer;
    font-weight: 700;
  }

  .right-ul .is-active {
    color: #333333;
    left: -10px;
  }

  .right-ul > li:after {
    content: "";
    position: absolute;
    border-bottom: 3px solid #c0c4cc;
    bottom: -0;
    left: 100%;
    width: 0;
    transition: width 350ms, left 350ms;
    -webkit-transition: width 350ms, left 350ms;
  }

  .right-ul > .is-active:after {
    border-color: #333333;
  }

  .right-ul > li{
    color: #c0c4cc;
  }
  .right-ul > li i{
    font-size: 18px;
    padding-right: 5px;
    vertical-align: middle;
    transition: all linear 0s;
  }
  .right-ul > li:hover:after {
    left: 0;
    width: 100%;
    transition: width 350ms;
    -moz-transition: width 350ms;
    -webkit-transition: width 350ms;
  }
</style>
