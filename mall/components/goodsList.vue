<template>
	<view class="content">
		<view class="goodsArea" v-for="(item,index) in content" :key="index">
			<image :src="item.img" mode=""></image>
			<text>{{item.goodstitle}}</text>
			<view class="goodsInfo">
				<view class="free">{{item.free}}</view>
				<view class="msg">{{item.detail}}</view>
			</view>
			<view>￥{{item.price}}</view>
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
			"content"
		]
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	
	.content{
		width: 100%;
		background: #fff;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 0;
	}
	
	.goodsArea{
		width: 50%;
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
