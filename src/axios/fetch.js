import axios from 'axios';

export default class fetch {
  static requestget (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: params}).then(res => {
        resolve(res.data)
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
