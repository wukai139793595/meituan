import service from '@/util/request.js'

function get(url, params) {
  return new Promise((resolve, reject) => {
    service({
      method: 'GET',
      url: url,
      params: params
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err);
    })
  })
}

// 登录接口
export function mtLogin(params) {
  return get('/api/meituan/login', params)
}
// 注册接口
export function mtRegister(params) {
  return get('/api/meituan/register', params)
}
// 搜索框列表数据获取
export function mtSearch(params) {
  return get('/api/meituan/header/search.json', params)
}
// 首页左侧导航条 导航数据
export function mtLeftNav(params) {
  return get('/api/meituan/index/nav.json', params)
}
// 有格调内容区数据获取
export function mtQuality(params) {
  return get('/api/meituan/index/resultsByKeywords.json', params);
}
// 获取省份列表
export function mtProvince(params) {
  return get('/api/meituan/city/province.json', params);
}
// 获取热门城市
export function mtHotCity(params) {
  return get('/api/meituan/city/hot.json', params);
}
// 最近搜索城市
export function mtRecent(params) {
  return get('/api/meituan/city/recents.json', params);
}
// 获取城市列表接口
export function mtCityList(params) {
  return get('/api/meituan/city/cityList.json', params)
}
// 获取当前位置信息
export function mtPosition(params) {
  return get('/api/meituan/city/getPosition.json', params)
}
//获取区域列表
export function mtAreaList(params) {
  return get('/api/meituan/list/areaList.json', params)
}
// 产品展示列表数据获取
export function mtGoodsList(params) {
  return get('/api/meituan/list/goodsList.json', params)
}
// 获取分类列表
export function mtClassify(params) {
  return get('/api/meituan/list/classify.json', params)
}
