import {
  mtLogin,
  mtRegister
} from '@/api/index.js'

import {
  getToken,
  setToken,
  removeToken
} from '@/util/auth.js'
const user = {
  namespaced: true,
  state: {
    username: getToken('username')
  },
  mutations: {
    set_username: (state, val) => {
      state.username = val
    },
    remove_username: (state, val) => {
      removeToken('username');
      state.username = '';
    }
  },
  actions: {
    Login: ({
      commit
    }, {
      username,
      password
    }) => {
      return new Promise((resolve, reject) => {
        mtLogin({
          userName: username,
          password: password
        }).then(res => {
          if (res.status === "success") {
            console.log("login", res)
            commit('set_username', res.data);
            setToken("username", res.data);
            resolve(res);
          } else if (res.status === "fail") {
            reject(res.msg);
          }
        })
      })
    },
    Register: ({
      commit
    }, {
      username,
      password,
      repassword
    }) => {
      return new Promise((resolve, reject) => {
        mtRegister({
          userName: username,
          password: password,
          rePassword: repassword
        }).then(res => {
          if (res.status === 'success') {
            resolve(res);
          } else {
            reject(res);
          }
        })
      })
    }
  }
}

export default user
