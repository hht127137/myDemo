<template>
	<view>
		<!-- 设备状态栏 -->
		<view class="status_bar"></view>
		<view class="header">
			<view class="topHeader">
				<view>
					<image src="../static/search.png"></image>
				</view>
				<view class="logo">
					<image src="../static/image/logo2.png"></image>
				</view>
				<view>
					<image src="../static/image/trolley.png"></image>
				</view>
			</view>
			<view class="headerNav">
				<view v-for="(item,index) in recommon_cate" :key="index" :class="current==index?'active':''" @click="cateBtn(index)">{{item.catename}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:0
			}
		},
		props:[
			"recommon_cate"
		],
		methods:{
			cateBtn(index){
				this.current=index
			}
		}
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	
	.status_bar{
		/* 自适应设备状态栏高度 */
		height: var(--status-bar-height);
		background: rgba(0,0,0,.5);
		width: 100%;
	}
	
	.header{
		width: 100%;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		z-index: 3;
		background: #fff;
	}
	
	.topHeader{
		display: flex;
		view:nth-child(odd) image{
			width: 50rpx;
			height: 50rpx;
		}
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
	}
	
	.topHeader .logo image{
		width: 150rpx;
		height: 100rpx;
	} 
	
	.headerNav{
		display: flex;
		justify-content: space-around;
		font-size: 22rpx;
		view{
			padding: 10rpx 0;
		}
	}
	
	.active{
		color: deepskyblue;
		border-bottom: 2px solid deepskyblue;
	}
</style>
