/*
 * @Description: 服务控制器
 * @Author: Abbot
 * @Date: 2020-6-3 16:50:02
 */

import request from './http.js'
import { HTTP_PATH } from './httpConfig.js'

export function UserRegist(data) {
    return request({
        url: HTTP_PATH.user.userRegist,
        method: 'post',
        data   
    })
}

export function UserLogin(data) {
    return request({
        url: HTTP_PATH.user.userLogin,
        method: 'post',
        data   
    })
}

export function Logout(data) {
    return request({
        url: HTTP_PATH.user.logout,
        method: 'post',
        data   
    })
}



