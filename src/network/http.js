/*
 * @Description: 配置http请求
 * @Author: Abbot
 * @Date: 2020-6-3
 */

//导入axios
import axios from 'axios'

import { Notification } from 'element-ui'
//import { notification } from 'antd';

import qs from 'qs'

// import api from './api.js'
import { HTTP_PATH } from './httpConfig.js'
const service = axios.create({
    baseURL: HTTP_PATH.base, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
 })

 // request interceptor
service.interceptors.request.use(
    config => {
      // do something before request is sent
      return config;
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )
  
  // response interceptor
  service.interceptors.response.use(
    response => {
      const res = response.data
      return res
    },
    error => {
      // console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  );
  
  // 输出方法
  export default function request(config) {
    return new Promise((resolve, reject) => {
      let options = config;
      options.url = options.url || '';
      options.data = options.data || {};
      options.method = options.method || 'post';
      options.headers = options.headers || {};
	    // options.headers['Authorization'] = sessionStorage.getItem('oppId');
      if (options.method.toLowerCase() === 'get'||options.method.toLowerCase() === 'delete') {
        options.params = options.data
      } else {
        options.data = JSON.stringify(options.data);  //qs.stringify
        options.headers['Content-Type'] = 'application/json';
      }
      // options.responseType ='blob'
      // application/x-www-form-urlencoded
      service(options)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
          Notification({
            title: '网络错误',
            message: error,
            type: 'error',
            position: 'bottom-right'
          });
        })
    })
  }






