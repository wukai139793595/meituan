<template>
  <div class="filter">
    <div class="label">
      <label for="">{{labelName}}</label>
      <a
        href=""
        :class="{'active': isAll}"
      >全部
      </a>
    </div>
    <ul class="tags">
      <li
        v-for="(item,index) in list"
        :key="item.type"
        @mouseenter="tagMouseenter($event,index)"
      >
        <a
          @click="chooseTag($event,index)"
          href="javascript:void(0)"
          ref="atag"
        >
          {{item.name}}
          <i
            class="el-icon-caret-bottom"
            v-if="item.items[0].items.length"
          ></i>
        </a>
      </li>
      <dl
        v-if="currentTag.name"
        ref='dlTag'
      >
        <dt class="arrow">{{currentTag.name}}</dt>
        <dd><a
            href="javascript:void(0)"
            @click="selectAll"
          >全部</a></dd>
        <dd
          v-for="(e,i) in currentTag.items[0].items"
          :key="i"
        ><a
            href="javascript:void(0)"
            @click="selectItem($event,i)"
            ref="classicTag"
          >{{e}}</a></dd>
      </dl>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    labelName: {
      type: String,
      default: "分类"
    },
    list: {
      type: Array,
      default: () => {
        return [
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
          },
          {
            type: "4",
            name: "美食",
            items: [
              {
                title: "美食",
                items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
              }
            ]
          },
          {
            type: "5",
            name: "外卖",
            items: [
              {
                title: "外卖",
                items: ["美团外卖"]
              }
            ]
          },
          {
            type: "6",
            name: "酒店",
            items: [
              {
                title: "酒店星级",
                items: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
              }
            ]
          },
          {
            type: "7",
            name: "美食",
            items: [
              {
                title: "美食",
                items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
              }
            ]
          },
          {
            type: "8",
            name: "外卖",
            items: [
              {
                title: "外卖",
                items: ["美团外卖"]
              }
            ]
          },
          {
            type: "9",
            name: "酒店",
            items: [
              {
                title: "酒店星级",
                items: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
              }
            ]
          }
        ];
      }
    }
  },
  data() {
    return {
      currentIndex: -1,
      lastIndex: -1,
      currentDetailIndex: -1,
      lastDetailIndex: -1,
      isAll: true,
      currentTag: {}
    };
  },
  created() {
    console.log(this);
  },
  watch: {
    currentIndex: function(newData, oldData) {
      // if (oldData == -1) {
      //   this.$refs["atag"][newData].classList.add("active");
      // } else {
      //   this.$refs["atag"][oldData].classList.remove("active");
      //   this.$refs["atag"][newData].classList.add("active");
      // }
    }
  },
  methods: {
    chooseTag(event, index) {
      this.currentIndex = index;
    },
    tagMouseenter(event, index) {
      this.currentIndex = index;
      this.currentTag = this.list[index];
      var obj = this.$refs["dlTag"];
      if (
        this.lastIndex !== this.currentIndex &&
        this.currentDetailIndex !== -1
      ) {
        this.$refs["classicTag"][this.currentDetailIndex].classList.remove(
          "active"
        );
      } else if (
        this.lastIndex == this.currentIndex &&
        this.currentDetailIndex !== -1
      ) {
        this.$refs["classicTag"][this.currentDetailIndex].classList.add(
          "active"
        );
      }
      obj.style.left = event.target.offsetLeft + "px";
      obj.style.top = event.target.offsetTop + 28 + "px";
    },
    selectAll() {
      this.$refs["atag"][this.lastIndex].classList.remove("active");
      this.$refs["classicTag"][this.currentDetailIndex].classList.remove(
        "active"
      );
      this.isAll = true;
      this.lastIndex = -1;
      this.currentDetailIndex = -1;
    },
    selectItem(event, index) {
      this.isAll = false;
      if (this.lastIndex != -1) {
        this.$refs["atag"][this.lastIndex].classList.remove("active");
      }
      this.lastIndex = this.currentIndex;
      this.currentDetailIndex = index;
      this.$refs["classicTag"][index].classList.add("active");
      this.$refs["atag"][this.lastIndex].classList.add("active");
      this.$refs["dlTag"].style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.filter {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px 0;
  .label {
    position: absolute;
    width: 160px;
    // top: 0;
    // left: 0;
    label {
      color: #333;
      font-size: 14px;
      font-weight: 500;
      display: block;
      width: 80px;
      float: left;
    }
    a {
      font-size: 14px;
      padding: 0 10px;
      color: #666;
      display: inline-block;
      font-weight: 400;
      display: block;
      float: left;
    }
    .active {
      background-color: $primary-color;
      border-radius: 100px;
      color: #fff;
    }
    @include clear-float;
  }
  .tags {
    margin-left: 160px;
    border-bottom: 1px solid #e5e5e5;
    margin-top: -3px;
    position: relative;
    padding-bottom: 12px;
    li {
      min-width: 120px;
      display: inline-block;
      font-size: 14px;
      line-height: 28px;
      height: 28px;
      &:hover ~ dl {
        display: block !important;
      }
      a {
        padding: 0 10px;
        color: #666;
        font-weight: 400;
        line-height: 22px;
        display: inline-block;
        text-decoration: none;
      }
      .active {
        background-color: $primary-color;
        border-radius: 100px;
        color: #fff;
      }
    }
    dl {
      display: none;
      position: absolute;
      cursor: auto;
      user-select: text;
      white-space: normal;
      font-size: 12px;
      line-height: 1.5;
      font-weight: 500;
      text-align: left;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      max-width: 510px;
      padding: 19px 15px 9px;
      background-color: #fff;
      z-index: 200;
      &:hover {
        display: block !important;
      }
      dt {
        color: #ccc;
        font-size: 16px;
        margin-bottom: 11px;
        cursor: default;
        padding-left: 10px;
      }
      dd {
        min-width: 120px;
        font-size: 12px;
        display: inline-block;
        a {
          display: inline-block;
          line-height: 1.5;
          font-size: 12px;
          padding: 0 10px 5px;
          text-decoration: none;
        }
        .active {
          background-color: $primary-color;
          border-radius: 100px;
          color: #fff;
        }
      }
    }
  }
}
</style>