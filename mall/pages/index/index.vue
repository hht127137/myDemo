<template>
	<view class="content">
		<!-- 设备状态栏 -->
		<view class="status"></view>
		<myHeader></myHeader>
		<view class="headerHigh"></view>
		<view class="goodsCon">
			<image src="../../static/image/logo2.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import myHeader from "@/components/header.vue"
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			myHeader
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
	
	.status{
		/* 自适应设备状态栏高度 */
		height: var(--status-bar-height);
		width: 100%;
	}
	
	.headerHigh{
		height: 100rpx;
	}
</style>
