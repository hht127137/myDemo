<template>
	<view class="content">
		<!-- 用户区域 -->
		<view class="userArea">
			<view class="control">
				<text class="iconfont">&#xe612;</text>
				<text class="iconfont">&#xe614;</text>
			</view>
			<view class="userBox">
				<view class="user">
					<image src="../../static/image/member-tx.png" mode="" v-if="!code"></image>
					<image src="../../static/image/empty-tx.png" mode="" v-else></image>
					<view v-if="code">
						<navigator url="../login/login" hover-class="none">登录/注册</navigator>
					</view>
					<view v-else>
						<text>英特网络</text>
						<text>{{telphone}}</text>
					</view>
				</view>
				<image src="../../static/image/ewm.png" mode=""></image>
			</view>
		</view>
		<!-- 用户操作 -->
		<view class="userControl">
			<view>
				<image src="../../static/image/member-icon1.png"></image>
				<text>待付款</text>
			</view>
			<view>
				<image src="../../static/image/member-icon2.png"></image>
				<text>待付款</text>
			</view>
			<view>
				<image src="../../static/image/member-icon3.png"></image>
				<text>待付款</text>
			</view>
			<view>
				<image src="../../static/image/member-icon4.png"></image>
				<text>待付款</text>
			</view>
		</view>
		<!-- 我的设置 -->
		<view class="otherSet">
			<view @click="toAddress('../address/address')">
				<image src="../../static/image/member-menu1.png"></image>
				<text>收货地址</text>
			</view>
			<view>
				<image src="../../static/image/member-menu2.png"></image>
				<text>在线客服</text>
			</view>
			<view>
				<image src="../../static/image/member-menu3.png"></image>
				<text>邀请有礼</text>
			</view>
			<view>
				<image src="../../static/image/member-menu4.png"></image>
				<text>关于我们</text>
			</view>
		</view>
		<!-- 退出登录 -->
		<view class="loginOut" @click="loginOut" v-show="loginFlag">退出登录</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				code:true,
				loginFlag:false,
				telphone:''
			}
		},
		onShow(){
			this.getData();
		},
		methods:{
			getData(){
				uni.request({
				    url: 'http://api.intewl.cn/api/member/index', //仅为示例，并非真实接口地址。
				    method:"POST",
				    header: {
				        'token': uni.getStorageSync('token') //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code==1){this.telphone=res.data.data.telphone; this.code=false; this.loginFlag=true;}
						console.log(res);
				    }
				});
			},
			loginOut(){
				uni.removeStorageSync('token');
				this.code=true
				this.loginFlag=false;
			},
			toAddress(url){
				this.$href(url)
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #fff;
	}
	
	.userArea{
		width: 100%;
		height: 350rpx;
		background: url(../../static/image/member-top.png) no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
	}
	
	.userArea .user{
		display: flex;
		align-items: center;
		margin-top: 100rpx;
		margin-left: 30rpx;
		image{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
        view{
			display: flex;
			flex-direction: column;
			color: #fff;
			font-size: 26rpx;
			margin-left: 28rpx;
			text:nth-child(1){
				font-size: 32rpx;
			}
		}
	}
	
	.control{
		display: flex;
		justify-content: flex-end;
		margin: 25rpx 25rpx 0 0;
		text{
			font-size: 40rpx;
			color: #fff;
			margin: 0 10rpx;
		}
	}
	
	.userBox{
		display: flex;
		justify-content: space-between;
	}
	
	.userBox>image{
		width: 40rpx;
		height: 40rpx;
		margin-top: 130rpx;
		margin-right: 38rpx;
	}
	
	.userControl{
		display: flex;
		justify-content: space-around;
		padding: 15rpx 0 20rpx;
		background: #fff;
		margin-bottom: 20rpx;
		border-bottom: 16rpx solid #F5F6F4;
		image{
			width: 60rpx;
			height: 60rpx;
		}
		view{
			display: flex;
			flex-direction: column;
			align-items: center;
			text{
				margin-top: 16rpx;
			}
		}
	}
	
	.otherSet{
		background: #fff;
		padding: 0 20rpx;
		image{
			width: 44rpx;
			height: 44rpx;
		}
		view{
			display: flex;
			width: 100%;
			padding: 20rpx 0;
			align-items: center;
			font-size: 26rpx;
			border-bottom: 5rpx solid #F5F6F4;
			text{
				margin-left: 20rpx;
			}
		}
	}
	
	.loginOut{
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		border: 1rpx solid #C0C0C0;
		margin: 20rpx auto 0;
	}
</style>
