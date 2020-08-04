/**
 * 其他操作
 * updatedDate:2019.01.21
 */

const other = {
    /**
     * @desc 	截取字符串
     * @param 	{String}
     * @return 	{String}
     * updatedDate:2018.09.01
     */
    cutString: function(String, num) {
        var numx = 0;
        if (num) {
            numx = parseInt(num);
        } else {
            numx = String.length;
        }
        if (String.length > numx) {
            return String.replace(/<[^>]+>/g, "").replace(/&[^>]+;/g, "").substr(0, numx) + '……';
        } else {
            return String.replace(/<[^>]+>/g, "").replace(/&[^>]+;/g, "");
        }
    }, //截取字符串-end
    deepCopy: function(obj) {
        var result = Array.isArray(obj) ? [] : {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    result[key] = other.deepCopy(obj[key]); //递归复制
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    },
    /**
     * @desc	判断浏览器版本,提示下载11.0版本IE
     * updatedDate:2018.07.01
     */
    judgeBrowserVersion: function() {
        //判断ie浏览器版本
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        var browser_version = 0;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                browser_version = 7;
            } else if (fIEVersion == 8) {
                browser_version = 8;
            } else if (fIEVersion == 9) {
                browser_version = 9;
            } else if (fIEVersion == 10) {
                browser_version = 10;
            } else {
                browser_version = 6; //IE版本<=7
            }
        } else if (isEdge) {
            browser_version = 'edge'; //edge
        } else if (isIE11) {
            browser_version = 11; //IE11  
        } else {
            browser_version = -1; //不是ie浏览器
        }
        //提示下载最新版本
        if ((browser_version >= 6) && (browser_version < 11)) {
            // 下载弹出框
            if (confirm('请使用IE版本11.0，当前版本' + browser_version + '.0,否则会影响您使用，建议您升级！')) {
                window.location.href = "http://download.microsoft.com/download/5/6/F/56FD6253-CB53-4E38-94C6-74367DA2AB34/IE11-Windows6.1-x64-zh-cn.exe";
            }
        }
    }, //判断浏览器版本,提示下载最新IE版本-end

    /** 
     * @desc 判断浏览器是否支持webP格式图片
     * @return {Boolean} 
     * updatedDate:2018.09.01
     */
    isSupportWebP: function() {
        return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }, //判断浏览器是否支持webP格式图片-end

    /** 
     * @desc 下载文件
     * @param 	{String} url 
     * updatedDate:2018.09.12
     */
    download: function(url) {
        // console.log(url)
        //是否支持download属性
        //支持download属性的用download
        //不支持的用form表单
        // 方法一
        // 	    var isDownLoad = 'download' in document.createElement('a');
        // 	    if(!isDownLoad) {
        // 	        var $form = $('<form method="GET"></form>');
        // 	        $form.attr('action', url);
        // 	        $form.appendTo($('body'));
        // 	        $form.submit();
        // 	        $form.remove();
        // 	    } else {
        // 	        var aLink = document.createElement('a');
        // 	        aLink.href = url;
        // 	        aLink.download =''; // HTML5新增的属性，可以指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        // 	        var event;
        // 	        if(window.MouseEvent) {
        // 	            event = new MouseEvent('click');
        // 	        } else {
        // 	            event = document.createEvent('MouseEvents');
        // 	            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        // 	        }
        // 	        aLink.dispatchEvent(event);
        // 	    }
        // 方法二 使用iframe
        var iframe = document.createElement("iframe")
        iframe.style.display = "none";
        iframe.src = url;
        document.body.appendChild(iframe);
        // 方法三 直接下载，用户体验好
        // 		var $form = $('<form method="GET"></form>');
        // 		$form.attr('action', url');
        // 		$form.appendTo($('body'));
        // 		$form.submit();
    }, //下载文件-end
    /** 
     * @desc 获取路径中的参数
     * @return odj 路径中的参数集合
     * updatedDate:2019.02.21
     */
    getHrefData: function() {
        var sHref = window.location.href;
        var args = sHref.split('?');
        if (args[0] == sHref) {
            return "";
        }
        var arr = args[1].split('&');
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var arg = arr[i].split('=');
            obj[arg[0]] = arg[1];
        }
        return obj;
    }
};

export default other;