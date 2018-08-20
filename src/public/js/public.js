/***
 *
 * 	creationTime: 2018-08-13
 *  author: ZhangYun - ygamfine
 *
*/
// 通信方法
import axios from 'axios'

// 通信地址
const GetHostServer = 'http://localhost:8080/';

// 网站名称
const websiteName = ''
// 当前系统版本号
const version = 'v0.1.1';


/***
 *
 * axios 通信
 *
*/
var axiosAsk = function(met, url, datas, successFunc){
		// 发送 POST 请求
		axios({
		  	method: met,
		  	url: url,
		  	data: datas
		}).then(function(res){
				// 获取数据 将数据返回
				successFunc(res.data)
		})
	  .catch(function(error){
				// 错误信息
				console.error(error);
				// 向用户提示错误
				console.error('系统连接失败，请重新尝试或者联系系统管理员！');
		});
}


/***
 *
 * 将当前网页设置为浏览器首页
 *
*/
var setHomePage = function(obj){
		// 获取网站的 URL
		var url = window.location.href;
		try{
				obj.style.behavior='url(#default#homepage)';
				obj.setHomePage(url);
		}catch(e){
				if(window.netscape){
				 		try{
					 			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				 		}catch(e){
					 			alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
				 		}
				}else{
						alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + url + "点击确定。");
				}
		}
}

/***
 *
 * 收藏当前页面
 *
*/
var addFavorite = function() {
		// 获取网站的 title
		var title = document.title;
		// 获取网站的 URL
		var url = window.location.href;
		try {
		 		window.external.addFavorite(url, title);
		}
		catch (e) {
			  try {
			    	window.sidebar.addPanel(title, url, "");
			  }
			  catch (e) {
			      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
			  }
		}
}


export default {
		websiteName,
		axiosAsk,
		setHomePage,
		addFavorite,
		setDocTitle
}
