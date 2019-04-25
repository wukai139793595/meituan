<template>
  <div class="change-city">
    <div class="op-area">
      <dl class="choose-by-province">
        <dt>按省份选择:</dt>
        <dd>
          <wk-select
            :itemList='provinceList'
            :title='"省份"'
            @itemClick='selectProvince'
          />
        </dd>
        <dd>
          <wk-select
            :itemList='cityList'
            :title='"城市"'
            :isDisable='cityDisable'
          />
        </dd>
      </dl>
      <dl class="search-city">
        <dt>直接搜索：</dt>
        <dd>
          <el-select
            v-model="remoteValue"
            filterable
            remote
            placeholder="请输入城市中文或拼音"
            :remote-method="remoteMethod"
            :loading="loading"
            @change="selectChange($event)"
          >
            <el-option
              v-for="item in remoteList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </dd>
      </dl>

    </div>
    <wk-citylist
      :title="'热门城市：'"
      :cityList="hotList"
    />
    <wk-citylist
      :title="'最近访问：'"
      :cityList="recentList"
    />
    <wk-alphabet-city :alphabetCity='alphabetCity' />
  </div>
</template>

<script >
import wkSelect from "@/components/select/wk-select.vue";
import wkCitylist from "@/components/changeCity/city-list.vue";
import wkAlphabetCity from "@/components/changeCity/alphabet-city.vue";
import { mtProvince, mtHotCity, mtRecent, mtCityList } from "@/api/index.js";
import { cutArr } from "@/util/util.js";
export default {
  components: {
    wkSelect,
    wkCitylist,
    wkAlphabetCity
  },
  data() {
    return {
      value: "",
      remoteValue: "",
      provinceValue: "",
      cityValue: "",
      loading: false,
      cityDisable: false,
      alphabetCity: [],
      remoteList: [
        {
          id: 20,
          name: "广州",
          pinyin: "guangzhou",
          acronym: "gz",
          rank: "S",
          firstChar: "g"
        },
        {
          id: 30,
          name: "深圳",
          pinyin: "shenzheng",
          acronym: "sz",
          rank: "S",
          firstChar: "s"
        }
      ],
      hotList: [],
      recentList: [],
      provinceList: [],
      cityList: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      mtProvince().then(res => {
        this.alphabetCity = JSON.parse(JSON.stringify(res.data));

        console.log("alphabetCity", this.alphabetCity);
        let temp = [];
        cutArr(res.data, 10, temp);
        this.provinceList = temp;
      });
      mtHotCity().then(res => {
        this.hotList = res.data;
      });
      mtRecent().then(res => {
        this.recentList = res.data;
      });
      mtCityList().then(res => {
        this.cityCharList = res.data;
      });
    },
    selectProvince(index, ind) {
      let tempList = JSON.parse(
        JSON.stringify(this.provinceList[index][ind]["cityInfoList"])
      );
      let temp = [];
      cutArr(tempList, 10, temp);
      this.cityList = temp;
    },
    remoteMethod() {
      this.loading = true;
      if (arguments[0].trim()) {
        mtHotCity().then(res => {
          setTimeout(() => {
            this.loading = false;
            this.remoteList = res.data;
          });
        });
      }
    },
    selectChange(event) {}
  },
  watch: {
    cityList: function(newValue) {
      if (newValue.length > 0) {
        this.cityDisable = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.change-city {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  border: 1px solid #eee;
  padding: 20px;
  background-color: #fff;
  .op-area {
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    @include clear-float;
    dl {
      height: 100%;
      float: left;
      dt {
        font-size: 16px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
        display: inline-block;
        vertical-align: middle;
      }
      dd {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .choose-by-province {
      dd {
        margin-left: 20px;
      }
    }
    .search-city {
      margin-left: 60px;
      dd {
        margin-left: 10px;
      }
    }
  }
}
</style>