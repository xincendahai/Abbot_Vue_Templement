import  publicL from './en-Us/public';
import  user from './en-Us/user';
import menus from './en-Us/menus';

export const system = {
  ...publicL,
  ...user,
  ...menus
}

export const home = {
  title : 'System Manger',
  login : 'Login',
  userName : 'UserName',
  passWord : 'PassWord',
  rememberNum : 'Remember the password',
  putUserName : 'Please enter the account number',
  outPassWord: 'Please enter the account password'
  
}


