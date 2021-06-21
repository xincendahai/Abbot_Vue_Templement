import publicL from './zh-Ch/public';
import user from './zh-Ch/user';
import menus from './zh-Ch/menus';

export const system  = {
  ...publicL,
  ...user,
  ...menus,
};

export const home = {
  title : '管理系统',
  login : '登录',
  userName : '用户名',
  passWord : '密码',
  rememberNum : '记住账号密码',
  putUserName : '请输入账号',
  outPassWord: '请输入密码'
}
