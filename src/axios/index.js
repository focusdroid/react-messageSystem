import fetch from './fetch';
import { baseUrl } from "./url";


export function wearther (obj) {
  return fetch.requestget(`/baiduweather/weather/index`, obj)
}
export function getTableList (obj) { // 动态数据表格
  return fetch.requestget(baseUrl+`/table/list`, obj)
}
