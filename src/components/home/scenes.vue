<template>
  <div class="scenes">
    <div class="index-nav-container">
      <dl>
        <dt>有格调</dt>
        <dd
          :class="{active: item.type == currentHover}"
          v-for="(item,index) in titleList"
          :key="index"
          @mouseenter="titleMouseenter($event,index)"
        >{{item.title}}</dd>
      </dl>
    </div>
    <div class="quality-area">
      <el-row>
        <el-col
          :span="8"
          v-for="(ele, ind) in qualityArr[currentHover]"
          :key="ind"
        >
          <el-card>
            <img
              :src="ele.image"
              class="image"
            >
            <div>
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ ele.title }}</time>
                <el-button
                  type="text"
                  class="button"
                >ele.address</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mtQuality } from "@/api/index.js";
export default {
  data() {
    return {
      titleList: [
        {
          title: "全部",
          type: "all"
        },
        {
          title: "约会聚餐",
          type: "food"
        },
        {
          title: "丽人SPA",
          type: "spa"
        },
        {
          title: "电影演出",
          type: "movie"
        },
        {
          title: "品质出游",
          type: "travel"
        }
      ],
      qualityArr: {
        all: [
          {
            image:
              "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
            title: "木北造型",
            address: "崇文门新世界店",
            subTitle: "木北造型（崇文门新世界店）",
            price: 398
          },
          {
            image:
              "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
            title: "COSTA COFFEE（东方新天地店）",
            address: "东方新天地",
            subTitle: "玫瑰黑巧茶拿铁1份",
            price: 11
          },
          {
            image:
              "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
            title: "祈年八号中餐厅",
            address: "崇文门新世界",
            subTitle: "单人点心自助午餐",
            price: 98
          }
        ],
        food: [
          {
            image:
              "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
            title: "COSTA COFFEE（东方新天地店）",
            address: "东方新天地",
            subTitle: "玫瑰黑巧茶拿铁1份",
            price: 11
          },
          {
            image:
              "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
            title: "祈年八号中餐厅",
            address: "崇文门新世界",
            subTitle: "单人点心自助午餐",
            price: 98
          }
        ],
        spa: [
          {
            image:
              "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
            title: "木北造型",
            address: "崇文门新世界店",
            subTitle: "木北造型（崇文门新世界店）",
            price: 398
          }
        ],
        movie: [],
        travel: []
      },
      currentHover: "all",
      currentDate: new Date()
    };
  },
  created() {
    mtQuality({
      appkey: "wukai_1554183643782"
    }).then(res => {
      this.qualityArr = res.data;
    });
  },
  methods: {
    titleMouseenter(event, index) {
      this.currentHover = this.titleList[index].type;
    }
  }
};
</script>

<style lang="scss" >
.scenes {
  .index-nav-container {
    width: 100%;
    height: 44px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(
      to right,
      rgb(194, 176, 142) 3%,
      rgb(190, 164, 116) 100%
    );
    dl {
      line-height: 44px;
      color: #fff;
      dt {
        margin-left: 13px;
        margin-right: 10px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 18px;
        float: left;
        vertical-align: top;
      }
      dd {
        padding-left: 5px;
        padding-right: 5px;
        font-size: 14px;
        cursor: pointer;
        color: #fff;
        float: left;
        vertical-align: top;
        position: relative;
      }
      .active::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: calc(50% - 4px);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid #fff;
        border-top: 0px;
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
  .quality-area {
    width: 100%;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    padding: 11px 10px 10px 10px;
    .el-card {
      & > div {
        padding: 10px;
      }
      img {
        width: 100%;
        height: 162px;
        margin-bottom: 11px;
      }
    }
    .el-card:hover {
      background-color: #eee;
    }
  }
}
</style>