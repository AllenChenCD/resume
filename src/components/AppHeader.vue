<template>
  <div class="am-cf">

    <div class="right-side">
      <div class="navigation" style="border-bottom-width: 100vh;">
        <ul style="right: 3%;" class="nav-ul">
          <li>
            <router-link to="/" exact>
              首页<span></span>
            </router-link>
          </li>
          <li>
            <router-link to="/about/:2">
              关于<span></span>
            </router-link>
          </li>
          <li>
            <router-link to="/test/:3">
              项目<span></span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact/:4">
              联系<span></span>
            </router-link>
          </li>
          <li>
            <a href="javascript:;" @click="closeside">
              <i class="am-icon-times"></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <div>
    <div class="right-icon" @click="right_slide">
      <i class="am-header-icon am-icon-bars" style="font-size: 40px"></i>
    </div>
    <div class="W-head-portrait">
      <a href="javascript:;">
        <img src="/static/photo.png" @click="chnagestate" class="my-photo">
        <div class="play-img">
          <i class="am-icon-play" v-if="!show"  @click="chnagestate"></i>
          <!--<i class="am-icon-puzzle-piece" v-if="!show"  @click="chnagestate"></i>-->
        </div>
        <div class="My-resume"><span>Allen</span><i>'s</i> resume</div>
        <div class="clear"></div>
      </a>
    </div>
  </div>
    <audio id="h5audio_media" height="0" width="0" autoplay="true" loop="true" src="http://dl.stream.qqmusic.qq.com/C400003LolRI06scAG.m4a?vkey=EEF4762FE7BF81CE24629D5C465A04B0ED8892B5D5657B11235E142E8CB66DBE0ED9CDD0CF8E6B8AE20B9CE2E6D021D8BEBA2B0406EDB72C&amp;guid=6996208450&amp;uin=244676433&amp;fromtag=66"><source src="http://dl.stream.qqmusic.qq.com/C400003LolRI06scAG.m4a?vkey=EEF4762FE7BF81CE24629D5C465A04B0ED8892B5D5657B11235E142E8CB66DBE0ED9CDD0CF8E6B8AE20B9CE2E6D021D8BEBA2B0406EDB72C&amp;guid=6996208450&amp;uin=244676433&amp;fromtag=66"></audio>
  </div>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        transformstate: 0,
        comid: 0,
        show:true
      }
    },
    mounted: function(){
      this.chnagestate();
    },
    methods: {
      right_slide: function () {
        $(".right-side").css("transform", "translateX(0)")
      },
      closeside: function () {
        $(".right-side").css("transform", "translateX(100%)")
      },
      chnagestate:function () {
        this.show=!this.show;
       if(!this.show){
         $(".my-photo").css("animation-play-state","paused");
         h5audio_media.pause()
       }else {
         $(".my-photo").css("animation-play-state","running");
         h5audio_media.play()
       }
      }
    },

  }
</script>

<style scoped>
  .my-photo{
    animation: roll 3s linear  infinite;
  }
  .play-img{
    position: absolute;
    left: 13%;
    top: 22%;
    color: rgba(255,255,255,0.9);
  }
  @keyframes roll {
    0%{
      transform: rotateZ(0);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }
  .W-head-portrait {
    width: 280px;
    height: 60px;
    position: absolute;
    z-index: 200;
    left: 2.5%;
    top: 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    background: rgba(255,255,255,.4);
    border-radius: 10px;
  }
  .W-head-portrait img {
    margin-left: 4%;
    width: 60px;
    height: 100%;
    border-radius: 50%;
    float: left;
    /*border: 1px solid #ccc;*/
  }
  .My-resume {
    margin-left: 20px;
    font-size: 18px;
    float: left;
    height: 100%;
    line-height: 60px;
    color: #000;
    font-weight: 800;
  }
  .My-resume span {
    display: inline-block;
    color: white;
    height: 30px;
    margin-top: 15px;
    line-height: 30px;
    text-align: center;
    width: 74px;
    background: #000;
    border-radius: 4px;
  }
  .My-resume i {
    font-size: 18px;
    font-weight: 500;
    padding-left: 5px;
  }
  .clear {
    clear: both;
    overflow: hidden;
  }
  .am-icon-times:hover{
    transform: rotateZ(360deg);
    transition: all linear 0.5s;
  }
  .am-icon-bars{
    color: #666;
  }
  .am-icon-times {
    font-size: 30px;
  }

  .right-icon {
    position: absolute;
    top: 20px;
    right: 2%;
    cursor: pointer;
    z-index: 100;
  }

  .right-side {
    transform: translateX(100%);
    transition: transform linear 0.4s;
  }

  .right-side ul {
    z-index: 100;
  }

  .navigation ul li {
    text-align: right;
    white-space: nowrap;
  }

  .navigation ul li:hover a span {
    width: 100% !important;
    transition: width linear 0.2s;
  }

  .navigation ul li a {
    font-size: 20px;
    position: relative;
    font-family: 微软雅黑;
    color: rgb(104, 105, 103);
    display: inline-block;
    user-select: none;
    padding: 10% 30px;
    transition: color 0.4s ease-in;
  }

  .navigation ul li .is-active {
    color: #337ab7;
  }

  .navigation ul li a span {
    width: 0;
    height: 2px;
    background: #337ab7;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  .navigation ul li .is-active span {
    width: 100%;
  }

  .navigation ul {
    list-style: none;
    position: fixed;
    top: 30%;
    display: block;
    right: 5%;
    /*height: 406px;*/
    /*margin-top: -210px;*/
  }

  .navigation {
    z-index: 999;
    border-bottom-width: 100vh;
    right: 0;
    width: 35%;
    background: transparent;
    position: fixed;
    top: 0;
    height: 0;
    border-top: none;
    border-bottom: #e4e2e3 solid;
    border-left: transparent 180px solid;
    border-right: none;
    box-sizing: border-box;
  }
</style>
