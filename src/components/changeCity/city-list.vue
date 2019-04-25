   <template>
  <div class="city-list">
    <dl>
      <dt>{{title}}</dt>
      <dd>
        <a
          href=""
          v-for="(item,index) in cityList"
          :key="index"
        >
          {{item.name}}
        </a>
      </dd>
    </dl>
  </div>
</template>
   
   <script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    cityList: {
      type: Array,
      default: []
    }
  }
};
</script>
   
<style lang="scss" scoped>
.city-list {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
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
    max-width: 900px;
    a {
      margin: 0 20px;
      color: #666;
      display: inline-block;
      text-decoration: none;
    }
  }
}
</style>