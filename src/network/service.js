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

export function QueryAll(data) {
    return request({
        url: HTTP_PATH.user.queryAllUser(data.page,data.pageSize,data.isActive),
        method: 'get',
        data   
    })
 }

 export function AddUser(data) {
    return request({
        url: HTTP_PATH.user.addUser,
        method: 'post',
        data   
   })
 }

 export function ModifyUser(data) {
    return request({
        url: HTTP_PATH.user.modifyUser,
        method: 'post',
        data   
   })
}
export function DeleteUser(data) {
    return request({
        url: HTTP_PATH.user.deleteUser(data.id),
        method: 'get',
        data   
   })
}


export function queryAllRole(data) {
    return request({
        url: HTTP_PATH.role.queryAllRole(data.page,data.pageSize,data.isActive),
        method: 'get',
        data   
    })
 }

 export function QueryMenuAll(data) {
        return request({
            url: HTTP_PATH.menus.queryMenuAll,
            method: 'post',
            data   
       })
    }

 export function RoleData(data) {
        return request({
            url: HTTP_PATH.role.roleData,
            method: 'post',
            data   
       })
    }
export function AddRoleMenu(data) {
        return request({
                url: HTTP_PATH.role.addRoleMenu,
                method: 'post',
                data   
        })
   }
export function MobifyRoleMenu(data) {
    return request({
            url: HTTP_PATH.role.mobifyRoleMenu,
            method: 'post',
            data   
    })
}

export function DeleteRole(data) {
    return request({
            url: HTTP_PATH.role.deleteRole(data.id),
            method: 'get',
            data   
    })
}
export function RoleClassification(data) {
    return request({
            url: HTTP_PATH.role.roleClassification,
            method: 'post',
            data   
    })
}
export function QueryUsersAll(data) {
    return request({
            url: HTTP_PATH.user.queryUsersAll,
            method: 'post',
            data   
    })
}
export function ModifyUserData(data) {
    return request({
            url: HTTP_PATH.user.modifyUserData,
            method: 'post',
            data   
    })
}

export function GetGurisdiction() {
    return request({
            url: HTTP_PATH.menus.getGurisdiction,
            method: 'post',  
    })
}

export function ModifyLanguage(data) {
    return request({
            url: HTTP_PATH.user.modifyLanguage,
            method: 'post',
            data 
    })
}