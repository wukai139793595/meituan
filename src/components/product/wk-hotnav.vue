<template>
  <div class="hotnav">
    <div class="title">{{title}}</div>
    <div class="hot-classic">
      <dl class="hot-wrap">
        <dt>{{hotObj.hotTitle}}</dt>
        <div>
          <dd
            v-for="(item,index) in hotObj.hotList"
            :key="index"
          >
            <a href="">{{item.name}}</a>
          </dd>

        </div>
      </dl>
      <dl class="classic-wrap">
        <dt>{{classicObj.classicTitle}}</dt>
        <div class="classic-div">
          <dd
            v-for="(ele,ind) in classicObj.classicList"
            :key="ind"
          >
            <a href="">{{ele.title}}</a>
          </dd>

        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { mtHotCity, mtClassify } from "@/api/index.js";
export default {
  props: {
    title: {
      type: String,
      default: "美团导航"
    },
    hotObj: {
      type: Object,
      default: () => {
        return {
          hotTitle: "热门城市",
          hotList: [
            {
              name: "南京",
              url: "#"
            }
          ]
        };
      }
    },
    classicObj: {
      type: Object,
      default: () => {
        return {
          classicTitle: "热门分类",
          classicList: [
            {
              name: "北京",
              url: "#"
            }
          ]
        };
      }
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      mtHotCity().then(res => {
        console.log(res);
        this.hotObj.hotList = res.data;
      });
      mtClassify().then(res => {
        console.log(res);
        this.classicObj.classicList = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hotnav {
  width: 1190px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e5e5e5;
  .title {
    width: auto;
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-align: left;
    padding-left: 20px;
    line-height: 44px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-bottom: 6px;
    background-color: #0ecac7;
    background-image: linear-gradient(-90deg, #0ecac7 0, #06c1ae 100%);
  }
  .hot-classic {
    width: 100%;
    dl {
      width: 100%;
      height: auto;
      overflow: hidden;
      dt {
        width: 100px;
        height: 100%;
        float: left;
        font-size: 14px;
        font-weight: 500;
        color: #222;
        text-align: center;
        padding: 10px 0;
      }
      div {
        height: auto;
        padding-top: 12px;
        float: right;
        border-bottom: 1px solid #e5e5e5;
        overflow: hidden;
        width: 1090px;
        dd {
          width: 100px;
          height: 17px;
          font-size: 12px;
          text-align: left;
          margin-bottom: 13px;
          float: left;
        }
      }
      .classic-div {
        border-bottom: none;
      }
    }
  }
}
</style>