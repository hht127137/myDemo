//api接口的统一出口
//地址模块接口
const request = (url,data,method) => {
	// console.log(url,method,data)
	let httpDefaultOpts = {
		url: "http://47.56.173.44/shopdemo/public/index.php/addons/xshop" + url,
		data: data,
		method: method,
		header:{
			'content-type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8'
		}
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
};

export default request

