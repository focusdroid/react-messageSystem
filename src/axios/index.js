import fetch from './fetch';


export function wearther (obj) {
  return fetch.requestget(`/baiduweather/weather/index`, obj)
}
