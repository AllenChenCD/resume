<template>
  <div>

    <div class="contact-wrap">
      <div class="W-lian fadeInLeft">
        <div class="W-lian-right"></div>
        <div class="clear"></div>
        <div class="W-lian-bot"></div>
        <div class="W-lian-zhong">
          <div class="W-lian-heng">

            <p class="W-lian-p1">CONTACT</p>
            <p class="W-lian-p2">FOR ME</p>
            <div class="clear"></div>
          </div>
          <div class="W-lian-nr">
            <p class="W-lian-p3">
              <em class="W-lian-e1">生活</em>
              <em class="W-lian-e2">做事</em>
              <em class="W-lian-e3">梦想</em>
              <em class="W-lian-e4">未来</em>
            </p>
            <p class="W-lian-p4" style="text-align:center;">
              路漫漫其修远兮，吾将上下而求索<br>
              说不尽一世沧桑，道不明繁花依旧<br>
              愿，故里有桃花，红尽梦中年少<br>
              QQ：244676433<br>
              微信：13458609282<br>
            </p>
            <p class="nav-btns">
              <a href="tencent://message/?uin=244676433&Site=400301.com&Menu=yes" target="_blank"
                 class="am-icon-btn am-primary am-icon-qq am-animation-slide-left"></a>
              <a href="https://www.jianshu.com/u/1f3214c9e01d"
                 class="am-icon-btn am-secondary am-icon-drupal  am-animation-slide-left"></a>
              <a href="https://github.com/" class="am-icon-btn am-icon-github  am-animation-slide-left"></a>
              <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=d0VDQ0FAQUNERDcGBlkUGBo"
                 class="am-icon-btn am-icon-envelope     am-animation-slide-left"></a>
            </p>
          </div>
        </div>
      </div>
      <RightSide></RightSide>
    </div>

  </div>

</template>

<script>
  import RightSide from '@/components/Right-Side'

  export default {
    name: 'contact',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        active: 3
      }
    },
    components: {
      RightSide
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .contact-wrap {
    overflow: hidden;
  }

  .contact-wrap {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: darkgray;
  }

  .W-lian-bottom span {
    display: none;
    width: 60px;
    height: 30px;
    background: #337ab7;
    position: absolute;
    top: -42px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-size: 12px;
  }

  .W-lian-bottom span:hover {
    display: block;
  }

  .W-lian {
    width: 500px;
    height: 460px;
    left: 50%;
    top: 50%;
    position: absolute;
    margin: -200px 0 0 -250px;
  }

  .W-lian-right {
    float: right;
    border-top: 6px solid #ffd200;
    border-right: 6px solid #ffd200;
    width: 150px;
    height: 100px;
  }

  .clear {
    clear: both;
    overflow: hidden;
  }

  .W-lian-zhong {
    position: absolute;
    width: 400px;
    height: 400px;
    left: 50px;
    top: 30px;
  }

  .W-lian-bot {
    width: 488px;
    height: 30px;
    border-bottom: 6px solid #ffd200;
    border-right: 6px solid #ffd200;
    border-left: 6px solid #ffd200;
    position: absolute;
    bottom: 0;
  }

  .W-lian-heng {
    width: 364px;
    margin-left: 18px;
    height: 70px;
    border-bottom: 1px solid #ffd200;
    overflow: hidden;
  }

  .W-lian-nr {
    width: 364px;
    height: auto;
    margin: 0 auto;
    text-align: center;
  }

  .W-lian-p1, .W-lian-p2 {
    color: rgb(255, 210, 0);
    font-size: 40px;
    font-family: 微软雅黑;
    font-weight: 800;
    width: 204px;
    line-height: 70px;
    float: left;
  }

  .W-lian-p2 {
    color: #fff;
    width: 160px;
    margin-left: 0;
  }

  .W-lian-p3 {
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
  }

  .W-lian-p3 em {
    font-size: 24px;
    font-family: 微软雅黑;
    font-style: normal;
    padding: 0px 15px;
  }

  .W-lian-e1 {
    color: #e3723c;
  }

  .W-lian-e2 {
    color: #84c800;
  }

  .W-lian-e3 {
    color: #33ccff;
  }

  .W-lian-e4 {
    color: #9e966e;
  }

  .W-lian-p4 {
    margin-top: 14px;
    font-size: 18px;
    color: rgb(255, 255, 255);
    font-family: 微软雅黑;
    line-height: 35px;
  }

  .W-lian-bottom a {
    width: 34px;
    height: 34px;
    float: left;
    background: #404040;
    text-align: center;
    line-height: 34px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 10px;
    position: relative;
  }

  .nav-btns {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 510px) {
    .W-lian, .W-lian-zhong, .W-lian-bot {
      width: 100% !important;
    }
  }
</style>
