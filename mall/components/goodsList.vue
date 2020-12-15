<template>
	<view class="content">
		<view class="goodsArea">
			<image src="../static/image/p1.png" mode=""></image>
			<text>魅族 16S Pro</text>
			<view class="goodsInfo">
				<view class="free">免息</view>
				<view class="msg">4800W AI拍摄 屏幕下点三下</view>
			</view>
			<view>￥2699.00</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	
	.content{
		width: 50%;
	}
	
	.goodsArea{
		width: 100%;
		display: flex;
		flex-direction: column;
	    align-items: center;
		font-size: 22rpx;
		image{
			width: 100%;
			height: 380rpx;
		}
		.goodsInfo{
			width: 260rpx;
			border: 1px solid red;
			display: flex;
			flex-wrap: nowrap;
			margin: 14rpx 0;
			.free{
				width: 100rpx;
				background: red;
				color: #fff;
				text-align: center;
			}
			.msg{
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
</style>
