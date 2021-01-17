/*
 * @Description: api文件
 * @Author: Abbot
 * @Date: 2020-6-3
 */
const api = {
      base:'http://localhost:8089',
      user:{
           /* 用户注册 */
           userRegist : '/user/regist',
           /* 用户登录 */
           userLogin : '/user/login',
           /* 用户退出 */
           logout: '/user/logout'
      }
}

 export default api