import Vue from 'vue'
Vue.directive('document-click', {
  // 只调用一次，指令第一次绑定到元素时调用
  bind: function (el, binding, vnode) {
    document.addEventListener('click', binding.value, false);
  }
})
