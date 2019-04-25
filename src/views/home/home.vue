<template>
  <div class="home">
    <div class="banner-wrap">
      <div class="left-wrap">
        <div class="category-nav-wrap">
          <div class="category-nav-title-wrap">全部分类</div>
          <div class="category-nav-content-wrap">
            <ul @mouseleave="navMouseleave($event)">
              <li
                v-for="(item,index) in navList"
                :key="index"
                @mouseenter="navMouseenter($event,index)"
              >
                <i class="el-icon-picture"></i>
                <span>
                  <a href="">{{item.name}}</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </li>
            </ul>
          </div>
          <div
            class="category-nav-detail-wrap"
            v-if="showNav"
            @mouseenter='detailMouseenter($event)'
            @mouseleave="detailMouseleave($event)"
          >
            <dl
              v-for="(ele,ind) in navList[navIndex].items"
              :key="ind"
            >
              <dt><span>{{ele.title}}</span><span>更多<i class="el-icon-arrow-right"></i></span></dt>
              <dd><a
                  href=""
                  v-for="(e,i) in ele.items"
                  :key="i"
                >{{e}}</a></dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="right-wrap">
        <div class="home-header-links">
          <a
            href="#"
            class="yellow"
          >美团外卖</a>
          <a
            href="#"
            class="red"
          >猫眼电影</a>
          <a
            href="#"
            class="red"
          >美团酒店</a>
          <a
            href="#"
            class="yellow"
          >民宿／公寓</a>
          <a
            href="#"
            class="green"
          >商家入驻</a>
          <a
            href="#"
            class="red"
          >美团公益</a>
        </div>
        <div class="banner-row">
          <div class="slider-wrap">
            <el-carousel height="240px">
              <el-carousel-item
                v-for="item in 6"
                :key="item"
              >
                <a href="#">
                  <img
                    :src="'./static/images/'+item+'.jpg'"
                    alt=""
                  >
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <a
            href="#"
            class="link"
          >
          </a>
          <div class="banner-logincard">
            <div
              class="login-wrap"
              v-if="!userName"
            >
              <div class="login-box">
                <div class="head-img-row">
                  <img
                    src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
                    alt=""
                  >
                </div>
                <p class="user-name">Hi,你好</p>
                <el-button round>
                  <router-link to="/register">注册</router-link>
                </el-button>
                <el-button round>
                  <router-link to="/login">立即登录</router-link>
                </el-button>
              </div>
              <div class="login-box"></div>
            </div>
            <div
              class="login-wrap"
              v-else
            >
              <div
                class="default"
                style="display: block;"
              >
                <div class="setting"><a
                    href="https://www.meituan.com/account/settings"
                    target="_blank"
                  >
                    <div class="icon"><i class="iconfont icon-setting_iconx"></i></div>
                  </a></div>
                <div class="head-img-row"><a
                    href="https://www.meituan.com/account/userinfo/"
                    target="_blank"
                  ><img
                      src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png"
                      alt=""
                    ></a></div>
                <div class="nickname-row"><a
                    href="https://www.meituan.com/account/userinfo/"
                    target="_blank"
                  >
                    <p class="user-name">HMH687515992</p>
                  </a><a
                    href="https://www.meituan.com/account/userinfo/"
                    target="_blank"
                  ><i class="iconfont iconfont_level icon-lable_level_0"></i></a></div>
                <div class="fn-row clearfix">
                  <div class="fn-item"><a
                      href="https://www.meituan.com/orders/ "
                      target="_blank"
                    >
                      <div class="icon"><i class="iconfont icon-order_iconx"></i></div>
                      <p class="fn-name">我的订单</p>
                    </a></div>
                  <div class="fn-item"><a
                      href="https://www.meituan.com/collections/"
                      target="_blank"
                    >
                      <div class="icon"><i class="iconfont icon-collection_iconx"></i></div>
                      <p class="fn-name">我的收藏</p>
                    </a></div>
                  <div class="fn-item"><a
                      href="https://www.meituan.com/vouchers/"
                      target="_blank"
                    >
                      <div class="icon"><i class="iconfont icon-ticket_iconx"></i></div>
                      <p class="fn-name">抵用券</p>
                    </a></div>
                </div>
                <div class="fn-row clearfix">
                  <div class="fn-item"><a
                      href="https://www.meituan.com/account/userinfo"
                      target="_blank"
                    >
                      <div class="icon"><i class="iconfont icon-money_iconx"></i></div>
                      <p class="fn-name">余额</p>
                    </a></div>
                  <div class="fn-item"><a
                      href="https://www.meituan.com/account/userinfo/"
                      target="_blank"
                    >
                      <div class="icon"><i class="iconfont icon-more_iconx"></i></div>
                      <p class="fn-name">更多</p>
                    </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-row">
          <a
            href=""
            class="link"
          >
            <div class="pic1"></div>
          </a>
          <a
            href=""
            class="link"
          >
            <div class="pic2"></div>
          </a>
          <a
            href=""
            class="link"
          >
            <div class="pic3"></div>
          </a>
          <div class="download-app">
            <div class="qrcode-box">
              <img
                src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                alt=""
              >
            </div>
            <p>美团APP手机版</p>
            <p>
              <span class="red">1元起</span>
              <span class="gary">吃喝玩乐</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="scenes-wrap">
      <wk-scenes />
    </div>
  </div>
</template>

<script>
import { mtLeftNav } from "@/api/index.js";
import wkScenes from "@/components/home/scenes.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      showNav: false,
      navIndex: 0,
      navList: [
        {
          type: "food",
          name: "美食",
          items: [
            {
              title: "美食",
              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          items: [
            {
              title: "外卖",
              items: ["美团外卖"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          items: [
            {
              title: "酒店星级",
              items: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  },
  components: {
    wkScenes
  },
  computed: {
    ...mapState({
      userName: state => {
        return state.user.username;
      }
    })
  },
  created() {
    mtLeftNav({
      appkey: "wukai_1554183643782"
    }).then(res => {
      this.navList = res.data;
    });
  },
  methods: {
    navMouseenter(event, index) {
      this.navIndex = index;
      this.showNav = true;
    },
    navMouseleave(event) {
      this.showNav = false;
    },
    detailMouseenter(event) {
      this.showNav = true;
    },
    detailMouseleave(event) {
      this.showNav = false;
    }
  }
};
</script>

<style lang="scss" >
.home {
  width: 1190px;
  margin-left: auto;
  margin-right: auto;
  .banner-wrap {
    width: 100%;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .left-wrap {
      width: 230px;
      height: 425px;
      background-color: #aaa;
      position: relative;
      float: left;
      .category-nav-wrap {
        width: 230px;
        height: 475px;
        position: absolute;
        background-image: linear-gradient(
          -90deg,
          rgba(2, 181, 157, 0.85) 2%,
          rgba(22, 146, 183, 0.85) 100%
        );
        top: -50px;
        .category-nav-title-wrap {
          height: 50px;
          width: 230px;
          box-sizing: border-box;
          padding-left: 15px;
          padding-top: 15px;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
        }
        .category-nav-content-wrap {
          width: 100%;
          height: 425px;
          ul {
            width: 100%;
            height: 415px;
            // box-sizing: border-box;
            padding-top: 10px;
            li {
              width: 100%;
              height: 26px;
              box-sizing: border-box;
              padding: 2px 12px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              &:hover {
                background-color: rgba(255, 255, 0, 0.5);
              }
              i {
                color: #fff;
                font-size: 14px;
              }
              span {
                flex: 1;
                box-sizing: border-box;
                padding-left: 10px;
                a {
                  color: #fff;
                  font-size: 13px;
                  text-decoration: none;
                }
              }
            }
          }
        }
        .category-nav-detail-wrap {
          position: absolute;
          left: 230px;
          top: 60px;
          width: 400px;
          height: 416px;
          background-color: #fff;
          z-index: 200;
          dl {
            width: 100%;
            box-sizing: border-box;
            padding: 0 30px;
            dt {
              margin-top: 28px;
              width: 100%;
              padding-bottom: 10px;
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #eee;
              span:first-child {
                font-size: 16px;
              }
            }
            dd {
              width: 100%;
              a {
                margin-top: 10px;
                margin-right: 16px;
              }
            }
          }
        }
      }
    }
    .right-wrap {
      float: left;
      width: 950px;
      margin: 10px 0 0 10px;
      position: relative;
      .home-header-links {
        position: absolute;
        top: -45px;
        left: 20px;
        a {
          font-weight: 700;
          font-size: 16px;
          margin: 0 20px;
          cursor: pointer;
          color: #222;
        }
        a:hover {
          text-decoration: none;
        }
        .yellow:hover {
          color: yellow;
        }
        .red:hover {
          color: red;
        }
        .green:hover {
          color: green;
        }
      }
      .banner-row:nth-of-type(2) {
        width: 100%;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .slider-wrap {
          float: left;
          width: 550px;
          height: 240px;
          margin-right: 10px;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        @media screen and (max-width: 1190px) {
          .slider-wrap {
            width: 470px;
          }
        }
        .link {
          display: inline-block;
          float: left;
          width: 150px;
          height: 240px;
          margin-right: 10px;
          background-size: 100% 100%;
          background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
        }
        @media screen and (max-width: 1190px) {
          .link {
            display: none;
          }
        }
        .banner-logincard {
          float: left;
          width: 230px;
          height: 240px;
          background-color: #fff;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          .login-wrap {
            width: 100%;
            height: 100%;
            .login-box {
              padding-top: 30px;
              text-align: center;
              .head-img-row {
                margin: 0 auto 4px;
                img {
                  width: 47px;
                  height: 47px;
                  border: 4px solid #e5e5e5;
                  border-radius: 50% 50% 50% 50%/50% 50% 50%;
                }
              }
              .user-name {
                font-size: 16px;
                font-weight: 500;
                color: #222;
              }
              .el-button:first-of-type {
                width: 118px;
                margin: 10px auto 15px;
              }
              .el-button:last-of-type {
                width: 118px;
                margin: 0 auto;
              }
            }
            .default {
              padding-top: 30px;
              position: relative;
              display: block;
              .setting {
                position: absolute;
                top: 5px;
                right: 5px;
              }
              .head-img-row {
                border-radius: 30px;
                margin: 0 auto 4px;
                text-align: center;
                img {
                  width: 47px;
                  height: 47px;
                  border-radius: 50%;
                  border: 4px solid #e5e5e5;
                }
              }
              .nickname-row {
                position: relative;
                height: 30px;
                .user-name {
                  font-size: 16px;
                  color: #222;
                  text-align: center;
                  font-weight: 500;
                  white-space: nowrap;
                  width: 6em;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  margin: 0 auto;
                }
              }
              .fn-row {
                padding: 0 15px;
                .fn-item {
                  width: 33.3%;
                  float: left;
                }
              }
            }
          }
        }
      }
      .banner-row:nth-of-type(3) {
        padding-top: 10px;
        box-sizing: border-box;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .link {
          float: left;
          div:first-child {
            background-size: 100% 100%;
            margin-right: 10px;
            display: inline-block;
          }
          .pic1 {
            width: 270px;
            height: 165px;
            background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
          }
          .pic2 {
            width: 270px;
            height: 165px;
            background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
          }
          .pic3 {
            width: 150px;
            height: 165px;
            background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
          }
          @media screen and (max-width: 1190px) {
            .pic1,
            .pic2 {
              width: 230px;
            }
          }
          .pic3 {
            background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
          }
        }
        @media screen and (max-width: 1190px) {
          .link:nth-of-type(3) {
            display: none;
          }
        }
        .download-app {
          float: left;
          width: 230px;
          height: 165px;
          box-sizing: border-box;
          border: 1px solid #e5e5e5;
          background-color: #fff;
          text-align: center;
          .qrcode-box {
            width: 100%;
            height: 99px;
            margin-top: 10px;
            text-align: center;
            img {
              width: 95px;
              height: 95px;
            }
          }
          p:first-of-type {
            font-size: 16px;
            color: #222;
            font-weight: 500;
          }
          p:last-of-type {
            .red {
              color: red;
            }
            .gary {
              color: gary;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1190px) {
      .right-wrap {
        width: 710px;
      }
    }
  }
  .scenes-wrap {
    width: 100%;
    margin: 40px auto;
  }
}
@media screen and (max-width: 1190px) {
  .home {
    width: 950px;
  }
}
.search-add {
  padding-bottom: 35px;
  background-color: #fff;
}
</style>