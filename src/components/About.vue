<template>
  <div style="padding-top: 60px; background: #494748;">
    <div class="banner-info am-container">
      <div class="am-u-md-7 header-right">
        <h1>Hi !</h1>
        <h6>web前端</h6>
        <ul class="address">

          <li>
            <ul class="address-text">
              <li><b>姓名</b></li>
              <li>陈健平</li>
            </ul>
          </li>
          <li>
            <ul class="address-text">
              <li><b>学历 </b></li>
              <li>本科</li>
            </ul>
          </li>
          <li>
            <ul class="address-text">
              <li><b>毕业学校 </b></li>
              <li>川师成都学院</li>
            </ul>
          </li>
          <li>
            <ul class="address-text">
              <li><b>年龄 </b></li>
              <li>27</li>
            </ul>
          </li>
          <li>
            <ul class="address-text">
              <li><b>地址 </b></li>
              <li>四川省成都市</li>
            </ul>
          </li>
          <li>
            <ul class="address-text">
              <li><b>工作年限 </b></li>
              <li>3年</li>
            </ul>
          </li>

        </ul>
      </div>
      <div class="am-u-md-5 header-left am-hide-sm-only">
        <img src="../assets/img/photo.png" alt="">
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="work" class="work" style="background: #fff">
      <div class="am-container">
        <div class="service-head text-center">
          <h4>近三年</h4>
          <h3>我的 <span>工作足迹</span></h3>
          <span class="border one"></span>
        </div>
        <div class="time-main w3l-agile">
          <div class="am-u-lg-6 year-info am-u-md-12 am-hide-sm-only">
            <ul class="year">
              <li>2018</li>
              <li>2017</li>
              <li>2015</li>
              <div class="clearfix"></div>
            </ul>
          </div>
          <ul class="am-u-lg-6 timeline am-u-md-12">
            <li>
              <div class="timeline-badge info"><i class="am-icon-bank"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">SILK</h4>
                </div>
                <div class="timeline-body">
                  <p>
                    2018.3-至今，就职于思而科,从事web前端工作
                  </p>
                  <ul class="am-text-left" style="padding-left: 10% ">
                    <li>
                      负责项目psd图到项目原型的转换。
                    </li>
                    <li>
                      负责解决项目组前端问题
                    </li>
                    <li>
                      负责项目页面用户交互
                    </li>
                    <li>
                      负责部分项目维护
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div class="timeline-badge info"><i class="am-icon-bank"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">川大川科</h4>
                </div>
                <div class="timeline-body">
                  <p>
                    2017.5-2018.3，就职于川科川科,从事web前端工作
                  </p>
                  <ul class="am-text-left" style="padding-left: 10% ">
                    <li>
                      参与项目构建技术选型（如兼容性选择，前端框架的选择，样式框架选择等等）
                    </li>
                    <li>
                      负责项目mocplus图到项目原型的转换

                    </li>
                    <li>
                      负责公司常用样式库的编写
                    </li>
                    <li>配合设计师完成各页面js，jq界面特效。</li>
                    <li>负责项目浏览器文档需求兼容性（常用ie到ie7）
                    </li>
                    <li>负责各项目组前端页面展示问题的解决</li>
                    <li>负责ionic3手机混合app原型界面开发</li>
                    <li>编写ecmall框架内页面控制器内容， smarty数据的绑定。</li>
                    <li>项目整体优化</li>
                  </ul>
                </div>
              </div>
            </li>


            <li>
              <div class="timeline-badge info"><i class="am-icon-bank"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">MUSES</h4>
                </div>
                <div class="timeline-body">
                  <p>
                    2015.3-2017.5，就职于MUSES,从事web前端工作
                  </p>
                  <ul class="am-text-left" style="padding-left: 10% ">
                    <li>
                      psd图到原型界面div+css的编写；

                    </li>
                    <li>
                      活动页面的编写策划，页面的编写，js，jq特效实现；
                    </li>
                    <li>
                      网站维护
                    </li>
                    <li>
                      百度，微博推广后台的日常维护；

                    </li>
                    <li>seo搜索引擎优化
                    </li>
                  </ul>
                </div>
              </div>
            </li>


          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div id="silk">
      <div style="width: 100%;background: lightslategrey;font-size: 38px;padding: 40px 0;color: #ffffff"
           class="am-text-center">技能栈
      </div>
      <div class="am-g" style="background: #ffffff">
        <div style="padding: 40px 0;" class="am-container" id="silk-circle">
          <div class="am-u-md-4">
            <el-progress type="circle" :percentage="90" :width="200" color="#00b38c" id="test1"></el-progress>
            <p class="am-text-center">HTML</p>
          </div>
          <div class="am-u-md-4">
            <el-progress type="circle" :percentage="80" :width="200" color="#00b0f0"></el-progress>
            <p class="am-text-center">CSS</p>
          </div>
          <div class="am-u-md-4">
            <el-progress type="circle" :percentage="60" :width="200" color="#82abba"></el-progress>
            <p class="am-text-center">JS</p>
          </div>
          <div class="am-u-md-4">
            <el-progress type="circle" :percentage="60" :width="200" color="#a2b4ba"></el-progress>
            <p class="am-text-center">NODE</p>
          </div>
          <div class="am-u-md-4">
            <el-progress type="circle" :percentage="30" :width="200" color="#373e40"></el-progress>
            <p class="am-text-center">框架/库</p>
          </div>
          <div class="am-u-md-4">
            <el-progress type="circle" :percentage="30" :width="200" color="#e4393c"></el-progress>
            <p class="am-text-center">PHP</p>
          </div>
        </div>

      </div>
      <div class="am-g other-slik" style="background: #ffffff">
        <div class="am-container">
          <h3 class="subtitle">Other Skills</h3>
          <div class="sp">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>浏览器兼容</span>
            <span>ES5／ES6</span>
            <span>JQUERY</span>
            <span>VUE</span>
            <span>ANGULAR</span>
            <span>BOOTSTRAP</span>
            <span>AMAZEUI</span>
            <span>ELEMENTUI</span>
            <span>WEUI</span>
            <span>IONIC</span>
            <span>AJAX/AXIOS</span>
            <span>GULP</span>
            <span>WEBPACK</span>
            <span>LESS</span>
            <span>NODE爬虫</span>
            <span>NPM</span>
            <span>REQUIREJS</span>
            <span>PHP基础</span>
            <span>MYSQL基本</span>
            <span>切图</span>
            <span>ecmall框架</span>
            <span>magento</span>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
    data: function () {
      return {
        test1: 0
      }
    },
    mounted: function () {

    }


  }
</script>

<style>
  .sp > span {
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
  }

  .sp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .subtitle {
    font-size: 18px;
    color: #8a8a8a;
    margin-top: 0;
    margin-bottom: 45px;
    font-weight: 300;
  }

  .wrapper {
    width: 100%;
  }

  .timeline > li > .timeline-panel:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    transform: translateZ(-4px);

    transition: all linear 0.5s;
  }

  span.border {
    width: 18%;
    background: #8C8989;
    height: 1px;
    display: block;
    margin-top: 26px;
    position: relative;
    margin: 23px auto 0px;
  }

  span.border.one:after {
    content: ' ';
    position: absolute;
    background: #00a78e;
    height: 7px;
    display: block;
    width: 73px;
    top: -4px;
    left: 45px;
  }

  .service-head h4 {
    font-size: 1.2em;
    color: #FFF;
    background: #00a78e;
    display: inline-block;
    padding: .5em 1.5em;
    position: relative;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .service-head h3 {
    color: #1b242f;
    font-size: 2em;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0 0 0.2em 0;
  }

  .header-right h6 {
    font-size: 1em;
    color: #C7C7C7;
    margin-top: 0.8em;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .header-right h1 {
    font-size: 1.2em;
    color: #FFF;
    background: #00a78e;
    display: inline-block;
    padding: .5em 1.5em;
    position: relative;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 480px) {
    ul.year li {
      margin-top: 10px;
      font-size: 1em;
      padding: 11px 0;
      width: 100%;
      display: block;
      margin: 0 auto;
      margin-bottom: 1em;
    }

    .timeline {
      left: 10px !important;
    }

    .header-left {
      padding: 1rem;
    }
  }

  @media (max-width: 1023px) {
    .header-right {
      padding: 1rem !important;
    }

    .timeline:before {
      left: 10px !important;
    }

    .timeline > li > .timeline-badge {
      left: -15px !important;
    }

    ul.year li:nth-child(2) {
      margin-top: 30px !important;
    }

    ul.year li:nth-child(3) {
      margin-top: 30px !important;
    }
  }

  .timeline-body p {
    font-size: 0.9em;
    margin: 0;
    padding: 0;
    color: #777;
    line-height: 1.9em;
  }

  h4.timeline-title {
    color: #1b242f;
    font-size: 1.2em;
    font-weight: 600;
  }

  .timeline > li > .timeline-panel:before {
    position: absolute;
    top: 18px;
    left: -15px;
    display: inline-block;
    border-top: 15px solid transparent;
    border-right: 15px solid #ccc;
    border-left: 0 solid #ccc;
    border-bottom: 15px solid transparent;
    content: " ";
  }

  .timeline > li > .timeline-panel {
    width: calc(100% - 75px);
    float: right;
    border: 1px solid #d4d4d4;
    padding: 15px 15px;
    position: relative;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
    background: #fff;
    border-bottom: 5px solid #00a78e;
  }

  .timeline > li > .timeline-badge {
    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
    text-align: center;
    position: absolute;
    top: 16px;
    left: -33px;
    margin-right: -25px;
    background-color: #999999;
    z-index: 100;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .timeline {
    list-style: none;
    padding: 10px 0 10px;
    position: relative;
  }

  .timeline > li {
    margin-bottom: 10px;
    position: relative;
  }

  .timeline > li:after {
    display: block;
    content: '';
    clear: both;
  }

  .timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 1px;
    background-color: #ccc;
    left: -9px;
    margin-right: -1.5px;
  }

  ul.year {
    text-align: right;
  }

  ul.year li {
    margin: auto;
    list-style: none;
    margin-top: 30px;
    font-size: 1em;
    color: #fff;
    text-align: center;
    background: #1b242f;
    padding: 11px 0;
    width: 60%;
    display: block;
  }

  ul.year li:nth-child(2) {
    margin-top: 180px;
  }

  ul.year li:nth-child(3) {
    margin-top: 400px;
  }

  #work {
    padding: 5em 0;
  }

  /*body {*/
    /*background: #494748;*/
  /*}*/

  .banner-info {
    background: rgba(23, 20, 20, 0.58);
    margin-top: 4em;
    margin-bottom: 4em;
    position: relative;
  }

  .header-right {
    padding: 3em;
  }

  ul.address {
    margin-top: 2em;
    border-top: 1px solid #AFAFAF;
    padding-top: 0.5em;
  }

  ul.address {
    padding: 0;
  }

  ul.address li {
    display: block;
    text-align: left;
  }

  ul.address-text {
    padding: 0;
  }

  ul.address li ul.address-text li:nth-child(1) {
    width: 20%;
  }

  ul.address li ul.address-text li {
    display: inline-block;
    font-size: 1em;
    color: #fff;
    margin-top: 1em;
    font-weight: 400;
  }

  ul.address-text b {
    color: #fff;
  }

  .header-left {
    padding-top: 3em;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .header-left img {
    width: 70%;
    margin-top: 2%;
    /*transform: translate(0,-50%);*/
    /*box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);*/
    /*transform: translateZ(-4px);*/
  }
</style>
