<template>
  <div class="am-hide-sm-only right-side-container">
    <div>
      <ul class="right-ul">
        <li>

          <router-link to="/" exact>
            <i class="am-icon-home"></i>
            首页
          </router-link>
        </li>
        <li>


            <router-link to="/about/:2">
              <i class="am-icon-user"></i>
              关于
            </router-link>


        </li>
        <li>


            <router-link to="/test/:3">
              <i class="am-icon-product-hunt"></i>
              项目
            </router-link>


        </li>
        <li>

            <router-link to="/contact/:4">
              <i class="am-icon-connectdevelop"></i>
              联系
            </router-link>
        </li>
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
  .right-ul .is-active{
    color: #333333;
  }
  .right-ul > li>a {
    display: flex;
    justify-content: space-around;
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
  }

  .right-ul > li > a>i {
    padding-right: 7px;
  }

  .right-ul > li > a>i {
    font-size: 18px;
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

  .right-ul > li, .right-ul > li > a {
    color: #c0c4cc;
  }

  .right-ul > li > a {
    font-weight: 700 !important;
  }

  .right-ul > li:hover:after {
    left: 0;
    width: 100%;
    transition: width 350ms;
    -moz-transition: width 350ms;
    -webkit-transition: width 350ms;
  }

</style>
