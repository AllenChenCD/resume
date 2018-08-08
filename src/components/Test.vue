<template>
  <div class="pro-wrap" style="padding-top: 60px">
    <div>
      <div>
        <div>
          <div class="section-title">
            <h1 class="heading" style="margin: 10vh 0">WHAT I DID</h1>
          </div>
        </div>
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="(item,index) in rolldata" :key="index">
            <div class="am-container">
              <div class="parent am-hide-sm-only am-u-md-8">
                <div class="container">
                  <div class="item" v-for="itemc in item.img">
                    <img :src="itemc" alt="">
                  </div>
                </div>
              </div>
              <div style="padding: 30px" class="am-u-sm-12 am-u-md-4">
                <h1>{{item.name}}</h1>
                <p class="am-md-text-justify">{{item.descript}}</p>
                <a :href="item.url"></a>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div style="padding: 30px" class="am-container">
              <h1>其他的项目</h1>
              <div class="sp">
                <a v-for="item in p_name" :href="item.url">{{item.name}}</a>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>


<script>
  import RightSide from '@/components/Right-Side'
  import {testdata} from '@/data/testdata'
  import {product} from '@/data/testdata'

  export default {
    name: "test",
    data() {
      return {
        clickthis: "0",
        rolldata: '',
        p_name:[]
      }
    },
    created() {
      this.rolldata = testdata
      this.p_name = product
    },
    components: {
      RightSide
    },
    data() {
      return {
        clickthis: "0",
        product: [
          {
            name: "射洪赶场网",
            img_src: "/static/f1.png",
            url: ""
          },
          {
            name: "四川大学文新学院",
            img_src: "/static/f2.png",
            url: ""
          },
          {
            name: "Epico",
            img_src: "/static/f3.png",
            url: ""
          },
          {
            name: "上海宜家购物商城",
            img_src: "/static/f4.png",
            url: ""
          },
          {
            name: "上海宜家购物商城web-app",
            img_src: "/static/f5.png",
            url: ""
          },
          {
            name: "江安县康复中心",
            img_src: "/static/f6.png",
            url: ""
          },
          {
            name: "川大川科",
            img_src: "/static/f7.png",
            url: ""
          },
          {
            name: "慧天云建筑",
            img_src: "/static/f8.png",
            url: ""
          },
          {
            name: "慧天云通科技有限公司",
            img_src: "/static/f9.png",
            url: ""
          },
          {
            name: "四川大学数学学院",
            img_src: "/static/f10.png",
            url: ""
          }
        ]
      }
    },
    methods: {},
    destroyed() {
      clearInterval()
    }
  }
</script>
<style>
  .sp > a {
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    padding: 6px 30px;
    display: inline-block;
    margin-right: 10px;
    border: 1px solid #f5f5f5;
    font-weight: 500;
    margin-bottom: 15px;
    font-size: 16px;
    color: #333333;
  }

  .sp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  * {
    transition: all ease-in-out 0.5s
  }

  .parent {
    width: 300px;
    height: 300px;
    /*border: 1px solid #e1e1e1;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    margin: auto;
    perspective: 1000px;
  }

  .container {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: autoMove 10s infinite linear;
    position: relative;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);

  }

  .item {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .container .item:nth-child(1) {
    background: red;
    transform: rotateY(-90deg) translateZ(100px);
  }

  .container .item:nth-child(2) {
    background: #000;
    transform: translateZ(-100px);
  }

  .container .item:nth-child(3) {
    background: lightblue;
    transform: translateZ(100px);
  }

  .container .item:nth-child(4) {
    background: lightcoral;
    transform: rotateY(90deg) translateZ(100px);

  }

  .container .item:nth-child(5) {
    background: lightcoral;
    transform: rotateX(90deg) translateZ(100px);

  }

  .container .item:nth-child(6) {
    background: lightcoral;
    transform: rotateX(90deg) translateZ(-100px);

  }

  img {
    max-width: 100%;
    height: 100%;
  }

  @keyframes move {
    0% {
      -webkit-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
    }
    /*50% {*/
    /*-webkit-transform: rotateX(360deg);*/
    /*-ms-transform: rotateX(360deg);*/
    /*-moz-transform: rotateX(360deg);*/
    /*}*/
    /*75% {*/
    /*-webkit-transform: rotateY(90deg);*/
    /*-ms-transform: rotateY(90deg);*/
    /*-moz-transform: rotateY(90deg);*/
    /*}*/
    100% {
      -webkit-transform: rotateY(360deg);
      -ms-transform: rotateY(360deg);
      -moz-transform: rotateY(360deg);
    }
  }

  .container {
    -webkit-animation: move 10s linear infinite;
    -ms-animation: move 10s linear infinite;
    -moz-animation: move 10s linear infinite;
  }

  .pro-wrap {
    background: #ffffff;
  }

  .el-carousel__container {
    height: 100%;
  }

  .el-carousel__item {
    background: #000000;
  }

  .custom-navbar.top-nav-collapse {
    padding: 16px;
    background: #000000;
    border-bottom: 0;
  }

  .custom-navbar .navbar-brand {
    border: 4px solid #ffffff;
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    padding-top: 11px;
  }

  .navbar-brand {
    float: left;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
  }
</style>
