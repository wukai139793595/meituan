<template>
  <div class="search">
    <div class="search-wrap">
      <div class="icon-wrap">
        <router-link to="/">
          <img
            src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团"
          >
        </router-link>
      </div>
      <div class="search-content">
        <div class="input-wrap">
          <input
            type="text"
            placeholder="搜索商家或地点"
            v-model="inputValue"
            @focus="inputFocus"
            @blur="inputBlur"
            @input="inputInput($event)"
          >
          <button>
            <i class="el-icon-search"></i>
          </button>
        </div>
        <div
          class="search-list-wrap"
          v-if="showList"
        >
          <ul class="search-list-content">
            <li
              class="search-list-box"
              v-for="(item,index) in searchList"
              :key="index"
            >
              <router-link :to="{path:'/', params:{name:item}}">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div
          class="hot-wrap"
          v-if="showHot"
        >
          <p>热门搜索</p>
          <ul class="hot-box">
            <a
              href="javascript:void(0)"
              v-for="(ele,ind) in hotArr"
              :key="ind"
            >{{ele}}</a>
          </ul>
        </div>
        <ul class="history-box">
          <a
            href="javascript:void(0)"
            class="history-search"
            v-for="(item, index) in historyArr"
            :key="index"
          >{{item}}</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mtSearch } from "@/api/index.js";
export default {
  data() {
    return {
      inputValue: "",
      showHot: false,
      showList: false,
      historyArr: [
        "杭州乐园",
        "杭州宋城景区",
        "杭州动物园",
        "杭州长乔极地海洋公园",
        "灵隐飞来峰景区"
      ],
      hotArr: ["杭州乐园", "杭州宋城景区", "杭州动物园"],
      searchList: ["杭州乐园", "杭州宋城景区", "杭州动物园"]
    };
  },
  methods: {
    inputFocus() {
      if (this.inputValue.trim() !== "") {
        this.showList = true;
        this.showHot = false;
      } else {
        this.showList = false;
        this.showHot = true;
      }
    },
    inputBlur() {
      setTimeout(() => {
        this.showHot = false;
        this.showList = false;
      }, 200);
    },
    inputInput(event) {
      event.target.value;
      if (event.target.value != "") {
        this.showHot = false;
        this.showList = true;
        mtSearch({
          appkey: "wukai_1554183643782"
        }).then(res => {
          this.searchList = res.data.list;
        });
      } else {
        this.showHot = true;
        this.showList = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 122px;

  background-color: #fff;
  margin: 0 auto;
  .search-wrap {
    width: 1190px;
    height: 100%;
    // padding-bottom: 35px;
    margin: 0 auto;
    & > div {
      float: left;
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .icon-wrap {
      width: 200px;
      height: 54px;
      padding: 28px 40px 40px 0;
      a {
        width: 100%;
        height: 100%;
        img {
          width: 126px;
          height: 46px;
        }
      }
    }
    @media screen and (min-width: 1190px) {
      .icon-wrap {
        padding-right: 60px;
      }
    }
    @media screen and (max-width: 1190px) {
      .icon-wrap {
        padding-right: 40px;
      }
    }
    .search-content {
      padding-top: 28px;
      position: relative;
      .input-wrap {
        width: 420px;
        height: 40px;
        display: flex;
        input {
          width: 84%;
          height: 100%;
          font-size: 14px;
          box-sizing: border-box;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border-top: 1px solid #13d1be;
          border-left: 1px solid #13d1be;
          border-bottom: 1px solid #13d1be;
          padding: 10px;
          border-right: none;
        }
        input::placeholder {
          font-size: 14px;
          color: #999;
        }

        button {
          width: 16%;
          height: 100%;
          box-sizing: border-box;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          background-color: #13d1be;
          border: none;
          i {
            color: #fff;
            font-weight: bold;
          }
        }
      }
      .search-list-wrap {
        position: absolute;
        top: 68px;
        left: 0;
        width: 84%;
        padding: 3px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 2px 2px 2px #eee;
        font-size: 12px;
        li {
          a {
            display: inline-block;
            padding: 3px 10px;
            width: 100%;
            line-height: 1.6;
            color: #333;
          }
          &:hover {
            background-color: #f2f2f2;
          }
        }
      }
      .hot-wrap {
        position: absolute;
        top: 68px;
        left: 0;
        width: 84%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 2px 2px 2px #eee;
        font-size: 12px;
        p {
          margin-bottom: 5px;
        }
        a {
          margin-right: 10px;
        }
      }
      .history-box {
        width: 420px;
        box-sizing: border-box;
        padding: 8px 0 0 12px;
        height: 25px;
        overflow: hidden;
        a {
          margin-right: 10px;
        }
      }
    }
  }
  @media screen and (min-width: 1190px) {
    .search-wrap {
      width: 1190px;
    }
  }
  @media screen and (max-width: 1190px) {
    .search-wrap {
      width: 960px;
    }
  }
}
</style>
