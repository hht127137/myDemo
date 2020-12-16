<template>
	<view>
		<view class="service">
			<view v-for="(item,index) in content" :key="index">
				<image :src="item.imgUrl"></image>
				<text>{{item.actname}}</text>
			</view>
		</view>
		<view class="product">
			<view v-for="(item,index) in icon" :key="index">
				<navigator url="#" hover-class="none">
					<image :src="item.imgUrl"></image>
					<text>{{item.iconname}}</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ["content", "icon"]
	}
</script>

<style lang="scss">
	.service {
		display: flex;
		justify-content: center;
		background: #F8F6F8;
		padding: 16rpx 0;

		image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 12rpx;
		}

		view {
			display: flex;
			align-items: center;
			margin: 0 20rpx;
			font-size: 20rpx;
			color: #A7A5A7;
		}
	}

	.product {
		display: flex;
		justify-content: center;
		background-color: #fff;

		image {
			width: 130rpx;
			height: 130rpx;
			margin-bottom: 10rpx;
		}

		navigator {
			display: flex;
			flex-direction: column;
			font-size: 16rpx;
			align-items: center;
			margin: 20rpx 18rpx;
		}
	}
</style>
