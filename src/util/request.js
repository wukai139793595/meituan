import cookies from 'js-cookie'
import axios from 'axios'
import {
  Message
} from 'element-ui'

const service = axios.create({
  baseURL: 'http://api.duyiedu.com',
  timeout: 5e3
  // withCredentials: true
})

service.interceptors.request.use((config) => {
  // console.log("config", config)
  config.params = {
    ...config.params,
    "appkey": "wukai_1554183643782"
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

service.interceptors.response.use((response) => {
  var data = response.data;
  if (response.data.status === 'fail') {
    Message({
      message: response.data.msg,
      type: 'error'
    })
  }
  return data;
}, (err) => {
  Message({
    message: err.msg,
    type: 'error'
  });
  return Promise.reject(error)
})

export default service
