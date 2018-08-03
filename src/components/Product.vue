<template>
  <div>
    <div class="pic-container am-hide-sm-only ">
      <div class="pic">
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(0deg) translateZ(300px);">
          四川大学文新学院
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(36deg) translateZ(300px);">
          射洪赶场网
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(72deg) translateZ(300px);">
          四川大学数学学院
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(108deg) translateZ(300px);">
          Epico
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(144deg) translateZ(300px);">
          江安县康复医院
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(180deg) translateZ(300px);">
          上海宜家商城
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(216deg) translateZ(300px);">
          川大川科
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(252deg) translateZ(300px);">
          慧天云建筑
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(288deg) translateZ(300px);">
          慧天云通
        </a>
        <a href="http://lj.scu.edu.cn/cdwxxy1.2/index.php" target="_blank"
           style="transform: rotateY(324deg) translateZ(300px);">
          四川数学协会
        </a>
        <!--<p></p>-->
      </div>
    </div>
    <RightSide></RightSide>
    <div style="width: 100%;height: 80px;" class="am-show-sm-only "></div>
    <div class="am-container" style="display: flex;justify-content: center;flex-wrap: wrap">

      <div class="am-u-md-4 am-margin-bottom" v-for="item in product">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{item.name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">View</el-button>
          </div>
          <div  class="text item">
            <img :src="item.img_src" alt="" class="am-img-responsive">
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>


<script>
  $(function () {
    var imgL = $(".pic img").length;
    var deg = 360 / imgL;
    var roY = 0, roX = -10;
    var xN = 0, yN = 0;
    var play = null;

    $(".pic img").each(function (i) {
      $(this).css({

        "transform": "rotateY(" + i * deg + "deg) translateZ(300px)"
      });

      $(this).attr('ondragstart', 'return false');
    });
    $(document).mousedown(function (ev) {
      var x_ = ev.clientX;
      var y_ = ev.clientY;
      clearInterval(play);
      $(this).bind('mousemove', function (ev) {
        /*获取当前鼠标的坐标*/
        var x = ev.clientX;
        var y = ev.clientY;
        /*两次坐标之间的距离*/
        xN = x - x_;
        yN = y - y_;

        roY += xN * 0.2;
        roX -= yN * 0.1;
        //$('body').append('<div style="width:5px;height:5px;position:absolute;top:'+y+'px;left:'+x+'px;background-color:red"></div>');

        $('.pic').css({
          transform: 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)'
        });
        /*之前的鼠标坐标*/
        x_ = ev.clientX;
        y_ = ev.clientY;
      });
    }).mouseup(function () {
      $(this).unbind('mousemove');
      var play = setInterval(function () {
        xN *= 0.95;
        yN *= 0.95
        if (Math.abs(xN) < 1 && Math.abs(yN) < 1) {
          clearInterval(play);
        }
        roY += xN * 0.2;
        roX -= yN * 0.1;
        $('.pic').css({
          transform: 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)'
        });
      }, 30);
    });
  });
  import RightSide from '@/components/Right-Side'

  export default {
    name: "test",
    components: {
      RightSide
    },
    data() {
      return {
        clickthis: "0",
        product:[
          {
            name:"射洪赶场网",
            img_src:"/static/f1.png",
            url:""
          },
          {
            name:"四川大学文新学院",
            img_src:"/static/f2.png",
            url:""
          },
          {
            name:"Epico",
            img_src:"/static/f3.png",
            url:""
          },
          {
            name:"上海宜家购物商城",
            img_src:"/static/f4.png",
            url:""
          },
          {
            name:"上海宜家购物商城web-app",
            img_src:"/static/f5.png",
            url:""
          },
          {
            name:"江安县康复中心",
            img_src:"/static/f6.png",
            url:""
          },
          {
            name:"川大川科",
            img_src:"/static/f7.png",
            url:""
          },
          {
            name:"慧天云建筑",
            img_src:"/static/f8.png",
            url:""
          },
          {
            name:"慧天云通科技有限公司",
            img_src:"/static/f9.png",
            url:""
          },
          {
            name:"四川大学数学学院",
            img_src:"/static/f10.png",
            url:""
          }
        ]
      }
    },
    methods: {
      addactive: function (index) {
        this.clickthis = index
      }
    }
  }
</script>

<style type="text/css">
  .text {
    font-size: 14px;
  }
  .text img{
    margin: 0 auto;
  }
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:100%;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  /*body{*/
  /*background: #ffffff;*/
  /*}*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img-item img{
    width: 100%;
    border-radius: 50%;
  }
  .active>a:nth-child(1){
    transform:perspective(700px)  rotateX(45deg) ;
    transform-style: preserve-3d;
    transition: all linear 0.2s;
  }
  .pic{
    animation:trans3d 3s  ease-in-out ;
  }
  @keyframes trans3d {
    0%{
      transform: rotateX(-10deg) rotateY(0deg);
    }
    100%{
      transform: rotateX(-10deg) rotateY(360deg);
    }
  }
  .img-item > a {
    display: block;
    text-align: center;
    margin-top: 10px;
  }
  .img-item{
    padding: 20px;
  }
  .img-item:hover{
    box-shadow: 0 0 10px #333;
  }
  .pro-img {
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  a {
    color: #000000;
  }

  a:hover {
    color: #000;
  }

  .pic-container {
    /*min-height:50vh;*/
  }

  .dev-line {
    width: 100vw;
    height: 80px;
    background: lightgray;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  * {
    margin: 0;
    padding: 0;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .pic {
    width: 150px;
    height: 30px;
    margin: 20% auto;
    position: relative;
    /*transform 旋转元素*/
    transform-style: preserve-3d;
    transform: perspective(800px) rotateX(-10deg) rotateY(0deg);
  }

  body {
    background-color: #66677c;
  }

  .pic a {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #ffffff;
  }

  .pic a:hover {
    box-shadow: 0 0 10px #000;
    transition: all linear 0.2s;
  }

  .pic p {
    width: 1200px;
    height: 1200px;
    background: -webkit-radial-gradient(center center, 600px 600px, rgba(255, 255, 255, .5), rgba(0, 0, 0, 0));
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -600px;
    margin-left: -600px;
    border-radius: 600px;
    transform: rotateX(90deg);
  }
</style>
