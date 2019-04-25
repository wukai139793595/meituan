const position = {
  namespaced: true,
  state: {
    value: '北京',
    nearCity: []
  },
  mutations: {
    set_value: (state, val) => {
      state.value = val;
    },
    set_nearCity: (state, val) => {
      state.nearCity = val;
    }
  },
  actions: {
    get_value: ({
      commit,
      val
    }) => {

      commit('set_value', val)
    },
    get_nearCity: ({
      commit
    }, val) => {
      commit('set_nearCity', val)
    }

  }
}
export default position;
