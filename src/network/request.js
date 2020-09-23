// 封装一个axios 方便管理

import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(config => config, err => {
    console.log(err);
  })
  instance.interceptors.response.use(arr => arr, err => {
    console.log(err);
  })
  return instance(config)
}
