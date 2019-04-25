<template>
  <div class='right-header'>
    <ul class="top-wrap">
      <li>
        <router-link to="/">我的美团</router-link>
        <dl class="my-mt">
          <dd>
            <router-link to='/'>我的订单</router-link>
          </dd>
          <dd>
            <router-link to='/'>我的收藏</router-link>
          </dd>
          <dd>
            <router-link to='/'>抵用券</router-link>
          </dd>
          <dd>
            <router-link to='/'>账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li>商家中心
        <dl class="business-center">
          <dd>
            <router-link to='/'>登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to='/'>美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to='/'>我想合作</router-link>
          </dd>
          <dd>
            <router-link to='/'>手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to='/'>餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to='/'>商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to='/'>免费合作美团排队</router-link>
          </dd>
        </dl>

      </li>
      <li class="netword-wrap">网站导航
        <div class="network-nav">

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.right-header {
  float: right;
  .top-wrap {
    li {
      height: 40px;
      float: left;
      padding: 12px 14px;
      color: #999;
      box-sizing: border-box;
      position: relative;
      dl,
      div {
        display: none;
        position: absolute;
        right: 0;
        top: 35px;
        background-color: #fff;
        text-align: center;
        line-height: 35px;
        z-index: 1000;
        // &:hover {
        //   display: block;
        // }
      }
      .my-mt {
        width: 100%;
      }
      .business-center {
        width: 140%;
      }
      .network-nav {
        width: 1190px;
        height: 200px;
      }
      @media screen and (min-width: 1190px) {
        .network-nav {
          width: 1190px;
        }
      }
      @media screen and (max-width: 1190px) {
        .network-nav {
          width: 960px;
        }
      }
      &:hover {
        background-color: #fff;
      }
      &:hover > dl {
        display: block;
      }
      &:hover > div {
        display: block;
      }
    }
  }
  // .top-wrap {
  //   & > li {
  //     height: 40px;
  //     float: left;
  //     padding: 12px 14px;
  //     color: #999;
  //     box-sizing: border-box;
  //     position: relative;
  //     &:hover {
  //       background-color: #fff;
  //       box-shadow: 0px 0px 2px 1px #eee;
  //     }
  //     &:hover > dl,
  //     &:hover > div {
  //       box-shadow: 0px 0px 2px 1px #eee;
  //       display: block;
  //     }
  //     & > div {
  //       position: absolute;
  //       top: 35px;
  //       right: 0px;
  //       height: 200px;
  //       display: none;
  //       z-index: 1000;
  //       background-color: #fff;
  //       p {
  //         width: 100%;
  //         height: 100%;
  //       }
  //     }
  //     @media screen and (min-width: 1190px) {
  //       & > div {
  //         width: 1190px;
  //       }
  //     }
  //     @media screen and (max-width: 1190px) {
  //       & > div {
  //         width: 960px;
  //       }
  //     }
  //     dl {
  //       position: absolute;
  //       top: 35px;
  //       right: 0px;
  //       line-height: 35px;
  //       background-color: #fff;
  //       display: none;
  //       dd {
  //         text-align: center;
  //       }
  //     }
  //     dl:hover {
  //       display: block !important;
  //     }
  //     .my-mt {
  //       width: 100%;
  //     }
  //     .business-center {
  //       width: 140%;
  //     }
  //   }
  //   &::after {
  //     content: "";
  //     display: block;
  //     clear: both;
  //   }
  // }
}
</style>
