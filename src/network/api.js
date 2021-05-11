/*
 * @Description: api文件
 * @Author: Abbot
 * @Date: 2020-6-3
 */
const api = {
      base:'http://localhost:8089',
      //base:'http://42.192.52.209:8089',
      user:{
           /* 用户注册 */
           userRegist : '/user/regist',
           /* 用户登录 */
           userLogin : '/user/login',
           /* 用户退出 */
           logout: '/user/logout',
           /* 查询用户 GET */ 
           queryAllUser:(page,pageSize,isActive)=>'/user/queryAll',
           /* 新增用户 POST */ 
           addUser : '/user/addUser',
           /* 修改用户 POST */ 
           modifyUser : '/user/modifyUser',
           queryUsersAll:'/user/queryUsersAll',
           deleteUser:(id)=>'/user/deleteUser',
           modifyUserData:'/user/modifyUserData',
           modifyLanguage:'/user/modifyLanguage',
      },
      role:{
            queryAllRole:(page,pageSize,isActive)=>'/role/queryAll',
            roleData:'/role/roleData',
            addRoleMenu:'/role/addRoleMenu',
            mobifyRoleMenu:'/role/mobifyRoleMenu',
            deleteRole:(id)=>'/role/deleteRole',
            roleClassification:'/role/roleClassification'

      },
      menus:{
            queryMenuAll:'/menu/queryMenuAll',
            getGurisdiction:'/user/getGurisdiction'
      },
      exportExcel:{
            userExportExcel:'/user/export',
            userImportExcel:'/user/import'
      }
}

 export default api