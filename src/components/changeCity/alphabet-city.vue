<template>
  <div class="alphabet-city">
    <div class="char">
      <dl>
        <dt>按拼音首字母选择：</dt>
        <dd>
          <a
            :href="'#city-'+item"
            v-for="(item,index) in charList"
            :key="index"
          >
            {{item}}
          </a>
        </dd>
      </dl>
    </div>
    <ul class="char-city">
      <li
        v-for="(item,index) in cityList"
        :key="index"
        :id="'city-'+index"
      >
        <span class="city-label">{{index}}</span>
        <span class="cities">
          <a
            href=""
            v-for="(ele,ind) in item"
            :key="ind"
          >{{ele.name}}</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mtProvince } from "@/api/index.js";
export default {
  props: {
    alphabetCity: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      cityList: [],
      charList: "ABCDEFGHJKLMNPQRSTWXYZ".split("")
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      mtProvince().then(res => {
        let cityList = {};
        res.data.forEach((item, index) => {
          item["cityInfoList"].forEach((ele, ind) => {
            if (!cityList[ele["firstChar"]]) {
              cityList[ele["firstChar"]] = [];
            }
            cityList[ele["firstChar"]].push(ele);
          });
        });
        this.cityList = cityList;
      });
    }
  },
  watch: {
    // alphabetCity: function(newValue) {
    //   let cityList = {};
    //   newValue.forEach((item, index) => {
    //     item["cityInfoList"].forEach((ele, ind) => {
    //       if (!cityList[ele["firstChar"]]) {
    //         cityList[ele["firstChar"]] = [];
    //       }
    //       cityList[ele["firstChar"]].push(ele);
    //     });
    //   });
    //   this.cityList = cityList;
    //   console.log(this.cityList);
    // }
  }
};
</script>

<style lang="scss" scoped>
.alphabet-city {
  width: 100%;
  .char {
    padding: 30px 0;
    dl {
      dt {
        font-size: 16px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
        display: inline-block;
      }
      dd {
        font-size: 14px;
        vertical-align: top;
        display: inline-block;
        margin-top: 2px;
        max-width: 1000px;
        margin: 0;
        padding: 0;
        a {
          font-size: 15px;
          color: #666;
          display: inline-block;
          margin: 0 10px;
          width: 25px;
          height: 25px;
          padding-top: 2px;
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          border-radius: 50%;
        }
      }
    }
  }
  .char-city {
    li {
      padding: 13px 30px 13px 10px;
      border-radius: 10px;
      .city-label {
        box-sizing: border-box;
        vertical-align: top;
        padding-top: 10px;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background: #13d1be;
        box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
      }
      .cities {
        display: inline-block;
        max-width: 1064px;
        a {
          margin: 10px 20px;
          color: #666;
          display: inline-block;
          font-size: 14px;
        }
      }
    }
  }
}
</style>