<template>

  <div
    class="wk-select"
    :class="{disable:isDisable}"
    @click="selectClick($event)"
    v-document-click='hideWrap'
  >
    {{realyTitle}}
    <i class="el-icon-caret-bottom wk-icon-caret-bottom"></i>
    <div
      class="item-wrap"
      v-if="showSelect"
      @click="wrapClick($event)"
    >
      <p>{{title}}</p>
      <div class="item-box">
        <div
          class="item-content"
          v-for="(item,index) in itemList"
          :key="index"
        >
          <span
            v-for="(ele,ind) in item"
            :key="ele.provinceCode || ele.id"
            @click="provinceClick($event,index,ind)"
          >{{(ele.provinceName || ele.name)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    doFun: {
      type: Function,
      defalut: function() {}
    }
  },
  data() {
    return {
      showSelect: false
    };
  },
  created() {
    this.initData();
    this.realyTitle = this.title;
  },
  methods: {
    initData() {
      this.mark = Date.now();
    },
    selectClick(e) {
      if (this.isDisable) {
        return;
      }
      e.stopPropagation();
      this.showSelect = !this.showSelect;
      this.$root.isMark = this.mark;
    },
    wrapClick(e) {
      e.stopPropagation();
    },
    provinceClick(e, index, ind) {
      this.showSelect = false;
      this.realyTitle =
        this.itemList[index][ind]["provinceName"] ||
        this.itemList[index][ind]["name"];
      this.$emit("itemClick", index, ind);
    },
    hideWrap(e) {
      this.showSelect = false;
    }
  },
  watch: {
    "$root.isMark": function(newData, oldData) {
      this.showSelect = newData === this.mark ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.wk-select.disable:hover {
  background-color: #eee;
  cursor: default;
}
.wk-select {
  position: relative;

  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 10px 0 10px 10px;
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 40px;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
  .wk-icon-caret-bottom {
    float: right;
    margin-right: 10px;
  }
  .item-wrap {
    &::before {
      top: -5px;
      border-bottom: 6px solid #fff;
      content: "";
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 0;
      position: absolute;
    }
    position: absolute;
    cursor: default;
    top: 45px;
    left: 0;
    min-width: 150px;
    // width: 264px;
    height: 375px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    p {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 11px;
    }
    .item-box {
      display: table-row;
      font-size: 14px;
      color: #666;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .item-content {
        font-size: 14px;
        color: #666;
        display: table-cell;
        span {
          cursor: pointer;
          font-size: 12px;
          color: #666;
          display: table;
          box-sizing: border-box;
          min-width: 52px;
          height: 20px;
          padding: 1px 8px;
          margin: 6px 30px 6px 0;
        }
      }
    }
  }
}
</style>