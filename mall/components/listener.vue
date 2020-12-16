<template>
	<view>
		<view class="listener">
			<!-- 楼层广告 -->
			<view>
				<image :src="content[0].img"></image>
				<view class="tableCon">
					<view class="title">MEIZU UR 魅族高端定制耳机 预约</view>
					<view class="intro">MEIZU魅族高端定制耳机 预约 MEIZU 魅族高端定制耳机 预约</view>
					<view class="tableLine"></view>
					<view class="price">￥200</view>
				</view>
			</view>
			<view>
				<view class="con2">
					<view class="title">MEIZU UR 魅族高端定制耳机 预约</view>
					<view class="intro">MEIZU魅族高端定制耳机 预约 MEIZU 魅族高端定制耳机 预约</view>
					<view class="tableLine"></view>
					<view class="price">￥200</view>
				</view>
				<image :src="content[1].img"></image>
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
		props:["content"]
	}
</script>

<style lang="scss">
	.listener>view{
		display: flex;
		height: 330rpx;
		image{
			flex: 1;
			height: 100%;
		}
		view{
			flex: 1;
			padding: 14rpx 0 0 0rpx;
			box-sizing: border-box;
			font-size: 28rpx;
			color: #fff;
			.title{
				width: 250rpx;
			}
			.intro{
				width: 320rpx;
				font-size: 14rpx;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			view{
				margin-left: 16rpx;
			}
			box-sizing: border-box;
		}
		.tableCon{
			background: #716BCF;
		}
		.con2{
			background: #FF6B5B;
		}
	}
</style>
