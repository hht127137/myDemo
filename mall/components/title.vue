<template>
	<view>
		<!-- 楼层标题 -->
		<view>
			<view class="title">{{title}}
			<view class="line"></view>
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
		props:[
			'title'
		]
	}
</script>

<style>
	.title{
		text-align: center;
		height: 120rpx;
		font-size: 30rpx;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.line{
		width: 32rpx;
		border-bottom: 6rpx solid #279CCF;
		margin: 6rpx auto 0;
	}
</style>
