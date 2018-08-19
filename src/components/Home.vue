<template>

  <div class="wrap">
    <transition name="slide-fade">
      <div class="middle am-padding" id="middle-container">
        <div class="block" style="width: 100%;height: 100%">
          <h2 class="title">hey,I'M Allen</h2>
          <p>{{msg}}</p>
          <p class="cn-name">{{ cn_msg}}</p>
          <p class="cn-name">{{ cn_msg2}}</p>
          <p class="nav-btns">
            <a href="tencent://message/?uin=244676433&Site=400301.com&Menu=yes" target="_blank"
               class="am-icon-btn am-primary am-icon-qq am-animation-slide-left"></a>
            <a href="https://www.jianshu.com/u/1f3214c9e01d"
               class=" am-icon-btn am-secondary am-icon-drupal  am-animation-slide-left"></a>
            <a href="https://github.com/" class="am-icon-btn am-icon-github  am-animation-slide-left"></a>
            <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=d0VDQ0FAQUNERDcGBlkUGBo"
               class="am-icon-btn am-icon-envelope am-animation-slide-left "></a>
          </p>
        </div>
      </div>
    </transition>
    <div class="slider">
      <div class="modal"></div>
      <img src="../assets/img/bk1.jpg" alt="" id="image">
    </div>
  </div>

</template>

<script>


  export default {
    name: 'Home',
    created:function () {
      clearInterval(this.xxx)
    },
    mounted: function () {
      var mouse = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
      }
      var block = {
        x: mouse.x,
        y: mouse.y,
        cx: mouse.cx,
        cy: mouse.cy
      }
      this.mouse_move(mouse,block)
      this.mouse_leave(mouse,block)
      this.set_int(mouse,block)
    },
    data() {
      return {
        msg: 'Life is like a boat',
        cn_msg: '你好，我叫陈健平',
        cn_msg2: '请多指教',
        active: 1
      }
    },
    methods: {
      mouse_move: function (mouse,block) {
        $('.block').on("mousemove", function (e) {
          mouse.x = (e.pageX - $(this).offset().left) - $(".block").width() / 2
          mouse.y = (e.pageY - $(this).offset().top) - $(".block").height() / 2
        })
      },
      mouse_leave: function (mouse,block) {
        $(".block").on("mouseleave", function (e) {
          mouse.x = mouse.cx;
          mouse.y = mouse.cy;
        })
      },
      set_int:function (mouse,block) {
        var xxx = setInterval(function () {
          block.cy += (mouse.y - block.cy) / 12;
          block.cx += (mouse.x - block.cx) / 12;
          $(".block").css({
            transform: 'scale(1.03) translate(' + (block.cx * 0.05) + 'px, ' + (block.cy * 0.05) + 'px) rotateX(' + (block.cy * 0.05) + 'deg) rotateY(' + (block.cx * 0.05) + 'deg)'
          })
        }, 50)
      }
    },
    destroyed(){
      clearInterval(this.xxx)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


  body, html {
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'ft-style';
    src: url('../assets/fonts/oilhand.ttf');
  }

  * {
    transition: all linear 0.1s;
  }

  .wrap {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }

  .modal {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
  }

  header {
    z-index: 5;
  }

  .am-header-default .am-header-icon {
    font-size: 30px;
  }

  .am-header-default {
    background: transparent;
  }

  .slider {
    position: absolute;
    top: 0;
    z-index: -10;
    width: 100%;
    height: 100%;
  }

  .slider img {
    width: 100%;
    height: 100%
  }

  .middle {
    width: 900px;
    max-width: 100%;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #333333;
    font-size: 18px;
    z-index: 50;
    border-radius: 5px;
    /*transform: rotate(7deg);*/
    /*transition: all linear 0.3s;*/
    /*cursor: pointer;*/
  }

  .middle:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    transform: translateZ(-4px);

  }

  .middle .title {
    font-size: 70px;
    font-family: "ft-style";
  }

  .middle p {
    font-family: Verdana;
    font-size: 25px;
    font-weight: bold;
  }

  .middle p.cn-name {
    font-family: cursive;
  }

  .nav-btns {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .nav-btns a {
    margin: 20px 10px 0 10px;
  }

  .progress {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
  }

  .progress > a {
    position: absolute;
    bottom: -13px;
    font-size: 30px;
  }

  .progress .am-progress {
    margin-bottom: 0;
  }

  .progress .am-icon-home {
    left: 25%;
  }

  .progress .am-icon-modx {
    left: 50%;
  }

  .progress .am-icon-anchor {
    left: 75%;
  }

  .progress .am-icon-pied-piper {
    left: 100%;
    transform: translate(-100%, 0);
  }


</style>
