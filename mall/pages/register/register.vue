<template>
	<view>
		<image src="../../static/image/logo2.png"></image>
		<view class="form">
			<view>
				<input type="text" v-model="query.telphone" placeholder="请输入用户名" />
			</view>
			<view class="code">
				<input type="password" v-model="query.code" placeholder="请输入验证码" />
				<view @click="getCode" :class="{'activeCode':codeFlag}">{{codeTxt}}</view>
			</view>
			<view>
				<input type="password" v-model="query.password" placeholder="请输入密码" />
			</view>
		</view>
		<button @click="register">注册</button>
		<view class="control">
			<navigator hover-class="none">已有账号?</navigator>|<navigator hover-class="none" url="../login/login">点击登录</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query: {
					telphone: "",
					password: "",
					code: ""
				},
				codeTxt: '获取验证码',
				codeFlag: false
			}
		},
		methods: {
			getCode() {
				if (this.codeFlag) return;
				this.codeFlag = true;
				var time = 60;
				this.codeTxt = '重新获取' + time;
				var timer = setInterval(() => {
					time--;
					if (time < 1) {
						clearInterval(timer);
						time = 10;
						this.codeFlag = false;
						this.codeTxt = '重新获取'
						return;
					}
					this.codeTxt = '重新获取' + time;
				}, 1000)

				uni.request({
					url: this.baseUrl+"/api/index/getSmsCode", //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						telphone: this.query.telphone
					},
					header: {
						"Content-Type": "application/x-www-form-urlencoded" //自定义请求头信息
					},
					success: (res) => {
						console.log(res);
					}
				});
			},
			register() {
				console.log(this.query)
				uni.request({
					url: this.baseUrl+'/api/index/register', //仅为示例，并非真实接口地址。
					method: "POST",
					data: this.query,
					header: {
						"Content-Type": "application/x-www-form-urlencoded" //自定义请求头信息
					},
					success: (res) => {
						console.log(res);
						uni.showToast({
							title: res.data.msg,
							icon:"none"
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	image {
		display: block;
		width: 200rpx;
		height: 150rpx;
		margin: 150rpx auto 110rpx;
	}

	input {
		width: 550rpx;
		height: 50rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form>view {
		display: flex;
		margin: 30rpx 0;
	}

	button {
		width: 550rpx;
		background: #16AEF5;
		color: #fff;
		font-size: 28rpx;
		margin-top: 28rpx;
	}

	.control {
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
		font-size: 18rpx;

		navigator {
			margin: 0 20rpx;
		}

		navigator:nth-child(2) {
			color: #16AEF5;
		}
	}

	.code {
		position: relative;
	}

	.code view {
		width: 150rpx;
		position: absolute;
		right: 0;
		top: -24rpx;
		font-size: 20rpx;
		background: #16AEF5;
		color: #fff;
		padding: 18rpx 0;
		text-align: center;
	}

	.activeCode {
		background: #C0C0C0 !important;
	}
</style>
