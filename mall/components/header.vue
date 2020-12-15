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
				<view class="active">推荐</view>
				<view>手机</view>
				<view>声学</view>
				<view>配件</view>
				<view>生活</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	
	.status_bar{
		/* 自适应设备状态栏高度 */
		height: var(--status-bar-height);
		background: red;
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
		border-bottom: 1px solid deepskyblue;
	}
</style>
