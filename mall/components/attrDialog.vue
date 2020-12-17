<template>
	<view>
		<view class="attrPopup">
			<!-- 遮盖 -->
			<view class="bg"></view>
			<!-- 属性内容 -->
			<view class="attrDialog">
				<view class="topDetail">
					<image src="../static/image/dimg1.jpg" mode=""></image>
					<view>
						<text>￥299.00</text>
						<view>魅族 16s Pro 黑色</view>
					</view>
					<text class="closeIcon iconfont" @click="closeBtn">&#xe62b;</text>
				</view>
				<view class="attr">
					<view>
						<text>版本</text>
						<view class="goodsAttr">
							<view>魅族 16s Pro</view>
							<view>魅族 16s Plus</view>
						</view>
					</view>
					<view>
						<text>颜色</text>
						<view class="goodsAttr">
							<view>黑色</view>
							<view>蓝色</view>
						</view>
					</view>
					<view>
						<text>数量</text>
						<view class="numBox">
							<view class="goodsNum">
								<view>-</view>
								<input type="text" value="1"/>
								<view>+</view>
							</view>
							<view class="num">
								(库存:5件)
							</view>
						</view>
					</view>
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
				this.$emit("close")
			}
		}
	}
</script>

<style lang="scss">
	.bg{
		position: fixed;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,.5);
	}
	
	.attrDialog{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff;
		height: 1070rpx;
	}
	
	.topDetail{
	    display: flex;
		border-bottom: 5rpx solid #E4DFE4;
		padding: 0rpx 28rpx 20rpx;
		box-sizing: border-box;
		position: relative;
		image{
			width: 230rpx;
			height: 230rpx;
			margin-top: -60rpx;
		}
	}
	
	.topDetail>view{
		font-size: 26rpx;
		margin: 18rpx 0 0 30rpx;
		text{
			font-size: 34rpx;
			color: #C97381;
		}
	}
	
	.closeIcon{
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}
	
	.attr{
		margin-left: 30rpx;
		margin-top: 20rpx;
		text{
			color: #333;
			font-size: 30rpx;
		}
	}
	
	.goodsAttr{
		display:flex;
		margin:20rpx 0;
	}
	
	.goodsAttr view{
		padding: 20rpx;
		border: 2rpx solid #CCCCCC;
		color: #333;
		font-size: 26rpx;
		margin-right: 26rpx;
	}
	
	.numBox{
		display:flex;
		align-items: center;
	}
	
	.goodsNum{
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 36rpx;
		input{
			width: 120rpx;
			height: 100%;
			border-top: 1px solid #CCCCCC;
			border-bottom: 1px solid #CCCCCC;
			text-align: center;
		}
		view{
			width: 70rpx;
			height: 100%;
			border: 1px solid #CCCCCC;
			text-align: center;
		}
	}
	
	.numBox{
		margin-top: 20rpx;
		font-size: 28rpx;
		.num{
			margin-left: 20rpx;
		}
	}
</style>
