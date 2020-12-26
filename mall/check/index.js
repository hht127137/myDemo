const check={
	checkTel(data){
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(data))){
			uni.showToast({
				title:"手机格式有误",
				icon:'none'
			})
			return true;
		}
		return false;
	},
	checkPass(data){
		if(data.length<6){
			uni.showToast({
				title:'密码长度不能小于6位',
				icon:'none'
			})
			return true;
		}
		return false;
	},
	checkUser(data){
		if(data==""){
			uni.showToast({
				title:'用户名不能为空',
				icon:'none'
			})
			return true;
		}
		return false;
	},
	checkCity(data){
		if(data==''||data=="请选择收货地址"){
			uni.showToast({
				title:'请选择收货地址',
				icon:'none'
			})
			return true;
		}
		return false;
	},
	checkAddress(data){
		if(data==''){
			uni.showToast({
				title:'地址不能为空',
				icon:'none'
			})
			return true;
		}
		return false;
	}
}

export default check