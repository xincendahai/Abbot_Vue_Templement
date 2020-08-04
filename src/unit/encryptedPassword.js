/*
 * 加密密码
 */

//导入md5加密
import md5 from 'md5';
//导入JSEncrypt加密
import { JSEncrypt } from 'jsencrypt'
//导入api配置
import api from "../config/api/api.js"
//导入http配置
import http from "../config/http/http.js"

const encryptedPassword = (psw,fun) => {
    //第一层md5加密
    let psw_md5 = md5(psw);
    //第二层反序加密
    let psw_trans = psw_md5.split("").reverse().join("");
    //第三层RSA加密
    //获取秘钥
    http.get(api.system.getPwdKey,{},(res)=>{
    	if (res.success) {
			let publicKey = res.data.key;
			// 新建JSEncrypt对象
		    let encryptor = new JSEncrypt();
		    // 设置公钥
			encryptor.setPublicKey(publicKey);
			//加密
			let psw_RSA = encryptor.encrypt(psw_md5);
		    fun(psw_RSA);
    	} else{
    		this.$notify({
				title: '错误',
				message: res.message,
				type: 'error',
				position: 'bottom-right'
			});  
    	}
    });
    
}


export default encryptedPassword;