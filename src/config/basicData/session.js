/**
 * 基础session操作数据
 */
import storage from './../../unit/lib/storage'
// 菜单图标
//import img_Map_model from '@/assets/img/side/Map_model.png'


const session = {
  // 设置数据
  set: {
    // 登录数据
    loginInfo: info => {
      storage.session.set('emergency-control-login', info)
    }
  },
  // 获取数据
  get: {
    // 登录数据
    loginInfo: () => {
      return storage.session.get('emergency-control-login')
    },

    // 菜单数据
    menuList: () => {
      let _menuList = [
        {
          menuName: '数据中心',
        //  menuIcon: img_Monitoring_profile,
          menuUrl: '/DataCenter/DataCenter',
          child: [],
        },
        {
          menuName: '系统管理',
        //   menuIcon: img_System_management,
          child: [
            {
              menuName: '用户管理',
              menuUrl: '/SystemManagement/User'
            },
            {
              menuName: '角色管理',
              menuUrl: '/SystemManagement/Role'
            },
          ]
        }
      ]
      return _menuList
    }
  },
  // 清空数据
  remove: {
    // 登录数据
    loginInfo: () => {
      storage.session.remove('emergency-control-login')
    }
  }
}

export default session
