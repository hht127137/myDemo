<template>
	<view>
		<view class="adIndex">
			<view class="adIndexLeft">
				<image src="../static/image/ad1.jpg" mode=""></image>
			</view>
			<view class="adIndexRight">
				<view>
					<image src="../static/image/ad2.jpg"></image>
				</view>
				<view>
					<image src="../static/image/ad3.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.adIndex{
		display: flex;
		border-top: 20rpx solid #F8F6F8;
		image{
			width: 100%;
			height: 100%;
		}
	}
	
	.adIndex>view{
		width: 50%;
		height: 520rpx;
		view{
			height: 265rpx;
		}
	}
</style>
