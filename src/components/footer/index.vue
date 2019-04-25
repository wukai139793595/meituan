<template>
  <div class="footer">
    <div class="footer-top">
      <div
        v-for="(item,index) in footerList"
        :key="index"
      >
        <dl
          v-for="(ele, ind) in item"
          :key="ind"
        >
          <dt>{{ele.title}}</dt>
          <dd
            v-for="(e,i) in ele.listArr"
            :key="i"
          >
            <router-link to="/">{{e}}</router-link>
          </dd>
        </dl>
      </div>

      <div>
        <dl>
          <dt>消费者服务热线</dt>
          <dd>外卖消费者：10109777</dd>
          <dd>猫眼消费者：10105335</dd>
          <dd>其他消费者：10107888</dd>
        </dl>
        <dl>
          <dt>商家服务热线</dt>
          <dd>外卖&餐饮商家：10105557</dd>
          <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107</dd>
        </dl>
        <dl>
          <dt>投诉举报热线</dt>
          <dd>违法和不良信息举报电话：4006018900</dd>
          <dd>举报邮箱：tousujubao@meituan.com</dd>
        </dl>
        <router-link to="/">商家自助入驻美团入口</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="copyright-left">
        <div>
          ©美团网团购 meituan.com
          <a
            href="javascript:void(0)"
            style="margin-left:20px"
          >京ICP证070791号</a>
          <a href="javascript:void(0)">京ICP备10211739号</a>
        </div>
        <div>
          <a href="javascript:void(0)">广播电视节目制作经营许可证（京）字第03889号</a>
        </div>
        <div>
          <a href="javascript:void(0)">食品经营许可证</a>
          <a href="javascript:void(0)">互联网药品信息服务资格证</a>
        </div>
        <div>
          <a href="javascript:void(0)">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
        </div>
      </div>
      <div class="copyright-right">
        <div style="text-align:right">
          <a
            href="javascript:void(0)"
            style="margin-right:0px"
          >京公网安备11010502025545号</a>
        </div>
        <div class="img-box">
          <a href="javascript:void(0)"></a>
          <a href="javascript:void(0)"></a>
          <a href="javascript:void(0)"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        [
          {
            title: "用户帮助",
            listArr: [
              "申请退款",
              "查看美团券密码",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告"
            ]
          },
          {
            title: "美团服务",
            listArr: [
              "美团外卖",
              "美团酒店",
              "猫眼电影",
              "美团配送",
              "美团云",
              "大众点评",
              "榛果民宿",
              "无人配送"
            ]
          }
        ],
        [
          {
            title: "商家合作",
            listArr: [
              "美食商家入驻(非外卖)",
              "美团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内度假商家入驻",
              "综合商家入驻",
              "榛果民宿房东商家入驻",
              "商家开票申请",
              "美团点评智能收银机",
              "聚宝盆餐饮开放平台",
              "美团点评收单",
              "免费使用美团排队",
              "快驴进货商家合作",
              "美团闪购商家入驻"
            ]
          }
        ],
        [
          {
            title: "代理商加盟",
            listArr: [
              "到店餐饮代理商招募",
              "非餐饮代理商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团点评5S服务商招募",
              "美团收单渠道代理商招募"
            ]
          },
          {
            title: "行业规范",
            listArr: ["美团点评餐饮安全管理办法"]
          },
          {
            title: "廉正举报",
            listArr: ["廉政邮箱"]
          }
        ],
        [
          {
            title: "关注美团",
            listArr: ["美团新浪微博"]
          },
          {
            title: "公司信息",
            listArr: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "法律声明",
              "价格说明",
              "美团网平台点评规则",
              "美团点评团购用户服务条款",
              "商户诚信公约及管理办法",
              "保险经纪资质"
            ]
          }
        ]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 1190px;
  margin: 0 auto;

  .footer-top {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 45px;
    border-top: 2px solid #eee;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    & > div {
      width: 220px;
      float: left;
      dl {
        padding-bottom: 20px;
        color: #666;
        dt {
          font-size: 14px;
          font-weight: 500;
          line-height: 2;
        }
      }
      a {
        color: #666;
        line-height: 2;
      }
      a:hover {
        color: #13d1be;
      }
    }
    @media screen and (max-width: 1190px) {
      & > div {
        width: 174px;
      }
    }
  }
  .footer-bottom {
    width: 1190px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 15px 0 30px 20px;
    border: 1px solid #eee;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .copyright-left {
      float: left;
      div {
        color: #999;
        line-height: 1.6;
      }
    }
    .copyright-right {
      float: right;
      .img-box {
        margin-top: 6px;
        a {
          display: inline-block;
          height: 38px;
          margin-right: 0px;
          margin-left: 3px;
          background-image: url(https://s0.meituan.net/bs/fe-web-meituan/cd77df7/img/sprites/footer.png);
        }
        a:nth-of-type(1) {
          width: 109px;
          height: 38px;
          background-position: 0 -167px;
        }
        a:nth-of-type(2) {
          width: 107px;
          background-position: 0 -127px;
        }
        a:nth-of-type(3) {
          width: 107px;
          background-position: 0 -40px;
        }
      }
    }
    a {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 1190px) {
    .footer-bottom {
      width: 960px;
    }
  }
}
@media screen and (max-width: 1190px) {
  .footer {
    width: 960px;
  }
}
</style>