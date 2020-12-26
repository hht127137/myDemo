<template>
	<view>
		<image src="../../static/image/logo2.png"></image>
		<view class="form">
			<view>
				<input type="text" v-model="query.telphone" placeholder="请输入用户名"/>
			</view>
			<view>
				<input type="password" v-model="query.password" placeholder="请输入密码"/>
			</view>
		</view>
		<button @click="login">登录</button>
		<view class="control">
			<navigator hover-class="none">忘记密码</navigator>|<navigator url="../register/register" hover-class="none">注册账号</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				query:{
					telphone:'',
					password:''
				},
				backUrl:'',
				back:''
			}
		},
		onLoad(option){
			console.log(option)
			this.backUrl=option.backUrl;
			this.back=option.back;
			console.log(this.backUrl)
		},
		methods:{
		    login(){
				if(this.check.checkTel(this.query.telphone)) return;
				if(this.check.checkPass(this.query.password)) return;
				
			    uni.request({
			        url: this.baseUrl+"/api/index/login", //仅为示例，并非真实接口地址。
			        data: this.query,
					method:'POST',
			        header: {
			            'content-type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8' //自定义请求头信息
			        },
			        success: (res) => {
			            console.log(res);
						uni.setStorageSync('token',res.data.data.token);
						// if(res.)
						if(this.back==1){
							uni.navigateBack({
								delta:1
							})
						}else{
							if(this.backUrl==undefined){
								uni.switchTab({
									url:"../profile/profile"
								})
							}else{
								uni.navigateTo({
									url:this.backUrl
								})
							}
						}
						
						setTimeout(()=>{
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							})
						},500)
						
			        }
			    });
			}
		}
	}
</script>

<style lang="scss">
	image{
		display: block;
		width: 200rpx;
		height: 150rpx;
		margin: 150rpx auto 110rpx;
	}
	
	input{
		width: 550rpx;
		height: 50rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}
	
	.form{
		display: flex;
		flex-direction: column;
		align-items: center;
		view{
			display: flex;
			margin: 30rpx 0;
		}
	}
	
	button{
		width: 550rpx;
		background: #16AEF5;
		color: #fff;
		font-size: 28rpx;
		margin-top: 28rpx;
	}
	
	.control{
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
		font-size: 18rpx;
		navigator{
			margin: 0 20rpx;
		}
		navigator:nth-child(2){
			color: #16AEF5;
		}
	}
</style>
