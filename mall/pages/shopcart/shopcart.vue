<template>
	<view class="content">
		<!-- <view class="empty">
			<image src="../../static/image/cartEmpty.png" mode=""></image>
			<view class="emptyTxt">
				亲,您需要登录才能查看购物车喲~~
			</view>
			<view class="emptyBtn">
				立即登录
			</view>
		</view> -->
		<uni-swipe-action class="cartList">
			<uni-swipe-action-item :right-options="options" @click="onClick" @change="change">
					<label>
						<checkbox checked="true" />
					</label>
					<image src="../../static/image/dimg1.jpg" mode=""></image>
					<view class="cartCon">
						<view class="title">Huawei/华为 Mate 40 Pro 5G手机mate40pro+正品官方旗舰店p40直降折叠新款保时捷M40rs</view>
						<text>apped 黑色</text>
						<view class="goodsCon">
							<view class="price">￥299.00</view>
							<view class="num">
								<view>-</view>
								<input type="text" value="1" />
								<view>+</view>
							</view>
						</view>
					</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<view style="height: 100rpx;"></view>
		<view class="cartBtn">
			<label>
				<checkbox :checked="false" />
				<text>全选</text>
			</label>
			<view class="rightArea">
				<view class="sumPrice">总价:<text>￥299.00</text></view>
				<view class="sum">
					去结算
					<text>(共1件)</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'

	export default {
		data() {
			return {
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#ff0000'
					}
				}]
			}
		},
		onLoad() {
			this.getData();
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		methods:{
			onClick(){
				console.log(1)
			},
			change(){
				
			},
			getData(){
				this.$request('/api/member/cartlist','','post').then(res=>{
					console.log(res);
				})
			}
		}

	}
</script>

<style lang="scss">
	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 150rpx;

		image {
			width: 295rpx;
			height: 295rpx;
		}

		.emptyTxt {
			font-size: 28rpx;
			color: #8F8E8F;
		}

		.emptyBtn {
			width: 250rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #16AEF5;
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			margin-top: 20rpx;
		}
	}

	.cartList {
		padding-left: 15rpx;
		box-sizing: border-box;
		display: flex;

		image {
			width: 600rpx;
			height: 250rpx;
		}

		label {
			margin-top: 20rpx;
		}

		.cartCon {
			margin-top: 20rpx;

			.title {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; // 这是改变 行数的
				-webkit-box-orient: vertical;
				font-size: 28rpx;
			}

			text {
				font-size: 26rpx;
				color: #A8A7A8;
			}

			.goodsCon {
				display: flex;
				justify-content: space-between;
				margin-top: 15rpx;

				.price {
					color: #AE3426;
				}

				.num {
					width: 150rpx;
					display: flex;
					margin-right: 10rpx;

					view {
						width: 200rpx;
						border: 1rpx solid #CCCCCC;
						text-align: center;
						box-sizing: border-box;
					}

					input {
						border-top: 1rpx solid #CCCCCC;
						border-bottom: 1rpx solid #CCCCCC;
						text-align: center;
					}
				}
			}
		}
	}

	.cartBtn {
		padding-left: 15rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: var(--window-bottom);
		left: 0;
		width: 100%;
		height: 100rpx;
		border-top: 1rpx solid #C0C0C0;
		background: #fff;
		box-sizing: border-box;
		font-size: 26rpx;

		.rightArea {
			display: flex;
			align-items: center;

			.sum {
				width: 200rpx;
				height: 70rpx;
				line-height: 70rpx;
				font-size: 26rpx;
				background: #00ADF3;
				color: #fff;
				text-align: center;
				border-radius: 50rpx;
				margin: 0 15rpx;

				text {
					font-size: 20rpx;
				}
			}

			.sumPrice {
				text {
					color: #AE3426;
				}
			}
		}
	}
</style>
