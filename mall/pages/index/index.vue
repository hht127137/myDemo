<template>
	<view class="content">
		<!-- 顶部导航 -->
		<myHeader></myHeader>
		<view class="headerHigh"></view>
		<!-- 轮播图 -->
		<indexSwiper></indexSwiper>
		<!-- 服务导航 -->
		<indexService></indexService>
		<!-- 广告 -->
		<adIndex></adIndex>
		<!-- 楼层标题 -->
		<myTitle :title="title"></myTitle>
		<!-- 楼层广告 -->
		<view class="floorAd">
			<image src="../../static/image/cate1Ad.jpg" mode=""></image>
		</view>
		<!-- 商品区域 -->
		<view class="goodsBox">
			<goodsList></goodsList>
			<goodsList></goodsList>
			<goodsList></goodsList>
			<goodsList></goodsList>
		</view>
		<myTitle :title="title2"></myTitle>
        <!-- 楼层广告 -->
        <view class="listener">
			<view>
				<image src="../../static/image/cateRecommend1.jpg"></image>
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
				<image src="../../static/image/cateRecommend2.jpg"></image>
			</view>
        </view>
	</view>
</template>

<script>
	import myHeader from "@/components/header.vue"
	import indexSwiper from "@/components/indexSwiper.vue"
	import indexService from "@/components/service.vue"
	import adIndex from "@/components/adIndex.vue"
	import myTitle from "@/components/title.vue"
	import goodsList from "@/components/goodsList.vue"
	
	export default {
		data() {
			return {
				title:'智能手机',
				title2:'魅族声乐'
			}
		},
		components:{
			myHeader,
			indexSwiper,
			indexService,
			adIndex,
			myTitle,
			goodsList
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	
	page{
		background: #F5F4F6;
	}
	
	.headerHigh{
		height: 176rpx;
	}
	
	.floorAd{
		width: 100%;
		height: 280rpx;
		image{
			width:100%;
			height: 100%;
		}
	}
	
	.goodsBox{
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		padding: 20rpx;
	}
	
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
			padding-left: 16rpx;
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
