import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import check from './check/index.js'

Vue.prototype.check=check
Vue.prototype.baseUrl="http://api.intewl.cn"
//封装请求
Vue.prototype.$request=function(path,data,method){
	return new Promise(resolve=>{
		uni.request({
		    url: this.baseUrl+path, //仅为示例，并非真实接口地址。
		    data: data,
			method:method,
		    header: {
		        'token': uni.getStorageSync("token") //自定义请求头信息
		    },
		    success: (res) => {
				if(res.data.tcode==0){
					resolve({"tcode":0,"msg":"请先登录"})
					return;
				}else if(res.data.tcode==2){
					uni.setStorageSync('token',res.data.token);
					uni.request({
					    url: this.baseUrl+path,
					    data: data,
						method:"post",
						header: {
						    'token': uni.getStorageSync("token")
						},
						success(res) {
							resolve(res.data)
						}
					})
					return;
				}else if(res.data.tcode==3){
					resolve({"tcode":0,"msg":"token无效,请重新登录"})
					return;
				}else if(res.data.tcode==4){
					resolve({"tcode":0,"msg":"没有相关数据"})
					return;
				}
		        resolve(res)
		    }
		});
	})
}

//封装跳转页面
Vue.prototype.$href=function(data,type=1){
	console.log(data);
	if(uni.getStorageSync('token')){
		if(type==1){
			uni.navigateTo({
				url:data
			})
		}else{
			uni.switchTab({
				url:data
			})
		}
	}else{
		uni.navigateTo({
			url:'../login/login?backUrl='+data
		})
	}
}

//跳转返回
Vue.prototype.$back=function(data){
	if(uni.getStorageSync('token')){
		uni.navigateTo({
			url:data
		})
	}else{
		uni.navigateTo({
			url:'../login/login?back=1'
		})
	}
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
