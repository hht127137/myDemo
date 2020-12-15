<template>
    <view>
		<view class="service">
			<view>
				<image src="../static/image/icon1.png"></image>
				<text>魅族直供</text>
			</view>
			<view>
				<image src="../static/image/icon2.png"></image>
				<text>满80免运费</text>
			</view>
			<view>
				<image src="../static/image/icon3.png"></image>
				<text>7天无理由退款</text>
			</view>
		</view>
		<view class="product">
			<view>
				<image src="../static/image/recommend1.png"></image>
				<text>魅族 16S Pro</text>
			</view>
			<view>
				<image src="../static/image/recommend2.png"></image>
				<text>魅族 16S Pro</text>
			</view>
			<view>
				<image src="../static/image/recommend3.jpg"></image>
				<text>魅族 16S Pro</text>
			</view>
			<view>
				<image src="../static/image/recommend4.jpg"></image>
				<text>魅族 16S Pro</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.service{
		display: flex;
		justify-content: center;
		background: #F8F6F8;
		padding: 16rpx 0;
		image{
			width: 40rpx;
			height: 40rpx;
			margin-right: 12rpx;
		}
		view{
			display: flex;
			align-items: center;
			margin: 0 20rpx;
			font-size: 20rpx;
			color: #A7A5A7;
		}
	}
	
	.product{
		display: flex;
		justify-content: center;
		background-color: #fff;
		image{
			width: 130rpx;
			height: 130rpx;
			margin-bottom: 10rpx;
		}
		view{
			display: flex;
			flex-direction: column;
			font-size: 16rpx;
			align-items: center;
			margin: 20rpx 18rpx;
		}
	}
</style>
