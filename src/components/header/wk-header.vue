<template>
  <div class="wk-header">
    <el-row class='header-wrap'>
      <left-header />
      <right-header />
    </el-row>
    <el-row class="search-add">
      <wk-search />
    </el-row>
  </div>
</template>

<script>
import leftHeader from "@/components/header/left-header.vue";
import rightHeader from "@/components/header/right-header.vue";
import wkSearch from "@/components/header/wk-search.vue";
export default {
  components: {
    leftHeader,
    rightHeader,
    wkSearch
  }
};
</script>

<style lang="scss" scoped>
.wk-header {
  height: auto;
  background-color: #f8f8f8;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  // line-height: 40px;
  .header-wrap {
    margin: 0 auto;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
@media screen and (min-width: 1190px) {
  .header-wrap {
    width: 1190px;
  }
}

@media screen and (max-width: 1190px) {
  .header-wrap {
    width: 960px;
  }
}
</style>
