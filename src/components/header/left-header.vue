<template>
  <div class="left-header">
    <i class="el-icon-location" />
    <span>{{$store.state.position.value}}</span>
    <router-link :to='{path:"/changeCity"}'>切换城市</router-link>
    <span>
      [
      <router-link
        to='/'
        v-for="item in $store.state.position.nearCity"
        :key="item.id"
      >{{item.name}}</router-link>
      <!-- <router-link to='/'>德清</router-link>
      <router-link to='/'>临安</router-link> -->
      ]
    </span>
    <span
      class="user-entry"
      v-if="userName"
    >
      <span class="username">{{userName}}</span>
      <span
        class="logout"
        @click="logOut"
      >退出</span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userName: state => {
        return state.user.username;
      }
    })
  },
  created() {
    console.log("head.username", this.userName);
  },
  methods: {
    logOut() {
      this.$store.commit("user/remove_username");
    }
  }
};
</script>

<style lang="scss" scoped>
.left-header {
  float: left;
  line-height: 40px;
  span {
    a:not(:last-child) {
      margin-right: 4px;
    }
  }
  .user-entry {
    margin-left: 10px;
    .username {
      color: #31bbac;
    }
    .logout {
      margin-left: 10px;
      color: #999;
    }
  }
}
</style>
