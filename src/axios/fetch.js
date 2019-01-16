import axios from 'axios';

export default class fetch {
  static requestget (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: params}).then(res => {
        if (res.status === 200 || res.status === '200') {
          resolve(res.data)
        } else {
          resolve(res.data) // 这里是loading效果
        }
      }).catch(err => {
        reject(err)
      })
    })
  }

  static requestpost (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        resolve(res.data)
      }).catch( err => {
        reject(err)
      } )
    })
  }

}
