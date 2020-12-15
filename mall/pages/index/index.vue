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
	</view>
</template>

<script>
	import myHeader from "@/components/header.vue"
	import indexSwiper from "@/components/indexSwiper.vue"
	import indexService from "@/components/service.vue"
	import adIndex from "@/components/adIndex.vue"
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			myHeader,
			indexSwiper,
			indexService,
			adIndex
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
</style>
