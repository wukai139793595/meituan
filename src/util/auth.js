import Cookie from 'js-cookie'

export function getToken(str) {
  return Cookie.get(str);
}
export function setToken(str, val) {
  Cookie.set(str, val)
}
export function removeToken(str) {
  Cookie.remove(str)
}
