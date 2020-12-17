<template>
	<view class="content">
		<view class="servicePopup">
			<!-- 背景遮罩 -->
			<view class="bg"></view>
			<!-- 服务内容 -->
			<view class="serviceCon">
				<view class="title">
					服务说明
					<text class="iconfont" @click="closeBtn">&#xe62b;</text>
				</view>
				<view>
					<view class="explain">
						<view>
							<text class="iconfont">&#xe8af;</text>
							花呗分期
						</view>
						<view class="explainCon">
						    请勿随意接收任何来源不明的文件，请勿随意点击任何来源不明的链接。涉及资金往来的事项请务必仔细核对资金往来信息。 天猫不会以订单有问题，让您提供任何银行卡、密码、手机验证码！遇到可疑情况可在钱盾“诈骗举报”中进行举报, 安全推荐
					    </view>
					</view>
					<view class="explain">
						<view>
							<text class="iconfont">&#xe8af;</text>
							花呗分期
						</view>
						<view class="explainCon">
						    请勿随意接收任何来源不明的文件，请勿随意点击任何来源不明的链接。涉及资金往来的事项请务必仔细核对资金往来信息。 天猫不会以订单有问题，让您提供任何银行卡、密码、手机验证码！遇到可疑情况可在钱盾“诈骗举报”中进行举报, 安全推荐
					    </view>
					</view>
					<view class="explain">
						<view>
							<text class="iconfont">&#xe8af;</text>
							花呗分期
						</view>
						<view class="explainCon">
						    请勿随意接收任何来源不明的文件，请勿随意点击任何来源不明的链接。涉及资金往来的事项请务必仔细核对资金往来信息。 天猫不会以订单有问题，让您提供任何银行卡、密码、手机验证码！遇到可疑情况可在钱盾“诈骗举报”中进行举报, 安全推荐
					    </view>
					</view>
				</view>
				<view class="serviceBtn" @click="closeBtn">
					确定
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			closeBtn(){
				console.log(1)
				this.$emit("close")
			}
		}
	}
</script>

<style lang="scss">
	.servicePopup{
		position: relative;
	}
	
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, .5);
	}
	
	.serviceCon {
		width: 100%;
		position: fixed;
		height: 1070rpx;
		bottom: 0;
		background: #fff;
	
		.title {
			height: 130rpx;
	        display: flex;
			justify-content: center;
			align-items: center;
			font-size: 34rpx;
			position: relative;
			text{
				position: absolute;
				right: 40rpx;
			}
		}
	
		view{
			font-size: 24rpx;
			view{
				color: #000000;
			}
			.explainCon{
				color: #C0C0C0;
				padding: 0 40rpx;
				margin-top: 14rpx;
			}
		}
		
		.explain{
			padding: 0 20rpx 18rpx;
			border-bottom: 2px solid #F3F2F3;
			line-height:36rpx;
			margin: 20rpx 0;
			text {
				color: #0078FF;
				margin-right: 10rpx;
			}
		}
	}
	
	.serviceBtn{
		width: 100%;
		height: 90rpx;
		background: #0078FF;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 30rpx !important;
	}
</style>
