<template>
  <div class="common">
    <div class="sort-option">
      <ul class="sort-box">
        <li><a
            href="javascript:void(0)"
            class="active"
          >智能排序</a></li>
        <li><a href="javascript:void(0)">价格排序</a></li>
        <li><a href="javascript:void(0)">人气最高</a></li>
        <li><a href="javascript:void(0)">评价最高</a></li>
      </ul>
    </div>
    <div class="common-list-main">
      <div
        class="common-box"
        v-for="(item,index) in commonList"
        :key="index"
      >
        <a
          href="javascript:void(0)"
          class="img-box"
        >
          <img
            :src="item.image"
            alt=""
          >
        </a>
        <div class="card-desc">
          <div class="card-desc-top">
            <a href="">{{item.title}}</a>
            <div class="item-eval-info">
              <el-rate
                v-model="item.score"
                show-text
                :texts="texts"
                disabled
              >
              </el-rate>
            </div>
            <div class="item-site-info">
              <span>{{item.address}}</span><span></span>
            </div>
            <div class="item-price-info">
              <span>￥</span>
              <span>{{item.dealItems[0].price}}</span>
              <span>起</span>
            </div>
          </div>
          <div class="card-desc-bottom">
            <div class="abstract-box">
              <img
                src=""
                alt=""
              >
              <span></span>
            </div>
            <div class="abstract-box">
              <img
                src=""
                alt=""
              >
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-wrap">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          @current-change="handleCurrentChange($event)"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mtGoodsList } from "@/api/index.js";
export default {
  data() {
    return {
      value: 2,
      texts: ["极差", "失望", "一般", "满意", "惊喜"],
      commonList: [
        {
          image:
            "http://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@275w_156h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            }
          ]
        },
        {
          image:
            "http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c",
          title: "井格重庆火锅（哈西万达店）",
          type: "food",
          score: 5,
          commentNum: 2555,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["重庆火锅", "哈西万达"],
          address: "南岗区中兴大街168号万达广场3层3055",
          avgPrice: 95,
          dealItems: [
            {
              title: "100元代金券1张",
              price: 28.9,
              counterPrice: 100,
              saleNum: 3409,
              priceType: "元"
            },
            {
              title: "四人套餐，提供免费WiFi",
              price: 280,
              counterPrice: 458,
              saleNum: 152,
              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  created() {
    mtGoodsList().then(res => {
      this.commonList = res.data;
    });
  },
  methods: {
    handleCurrentChange(event) {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.common {
  width: 100%;
  .sort-option {
    box-sizing: border-box;
    padding: 15px 20px 2px;
    .sort-box {
      width: 100%;
      li {
        min-width: 96px;
        display: inline-block;
        a {
          padding: 0 10px;
          display: inline-block;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-decoration: none;
        }
        .active {
          color: $primary-color;
        }
      }
    }
  }
  .common-list-main {
    box-sizing: border-box;
    padding: 15px 20px 2px;
    .common-box {
      border-top: 1px solid #e5e5e5;
      padding: 30px 0 20px;
      min-height: 125px;
      a {
        position: absolute;
        height: 125px;
        width: 220px;
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .card-desc {
        margin-left: 220px;
        padding-left: 20px;
        font-size: 12px;
        color: #666;
        overflow: hidden;
        .card-desc-top {
          position: relative;
          padding-bottom: 10px;
          a {
            position: relative;
            font-weight: 500;
            font-size: 16px;
            color: #333;
          }
          .item-site-info {
            margin-top: 4px;
          }
          .item-price-info {
            margin-top: 4px;
            span {
              font-size: 15px;
              vertical-align: text-bottom;
              line-height: 1;
              color: #f60;
            }
          }
        }
        .card-desc-bottom {
        }
      }
    }
    .pagination-wrap {
      margin: 40px auto;
    }
  }
}
</style>