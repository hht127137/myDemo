<template>
	<view class="content">
		<!-- 搜索框 -->
		<view class="searchArea">
			<view class="searchBox">
				<navigator url="#" hover-class="none">
					<image src="../../static/image/search2.png"></image>
					<text>搜索全部</text>
				</navigator>
			</view>
		</view>
		<!-- 分类内容 -->
		<view class="cateArea">
			<scroll-view class="cateLeft" scroll-y="true">
				<!-- 分类列表 -->
				<view class="cateList">
					<view :class="current==index?'cateItem active':'cateItem'" v-for="(item,index) in goodsCate" :key="index" @click="changeCate(index)">
						{{item.name}}
						<view :class="{cateLine:current==index}"></view>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="cateRight" scroll-y="true" :scroll-into-view="'cate'+mainCurrent" scroll-with-animation  @scroll="scollChange">
				<!-- 商品分类 -->
				<view class="goodsCate" v-for="(parentItem,parentIndex) in goodsCate" :key="parentIndex" :id="'cate'+parentIndex">
					<!-- <view v-for="(item,index) in parentItem.childlist" :key="index"> -->
						<text>---{{parentItem.name}}---</text>
						<view class="conArea">
							<view v-for="(item2,index2) in parentItem.childlist" :key="index2">
								<view>
									<image :src="item2.image" mode=""></image>
									<text>{{item2.name}}</text>
								</view>
							</view>
						</view>
					<!-- </view> -->
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import request from '../../http/request.js'

	export default {
		data() {
			return {
				cateList: [],
				current: 0,
				goodsCate: [],
				reactInfo:[],
				mainCurrent:0,
				scrollTop:0
			}
		},
		onLoad() {
			this.getData()
		},
		mounted(){
			setTimeout(()=>{
				this.getDomInfo()
				console.log(this.reactInfo)
			},1000)
		},
		methods: {
			getData() {
				request("/category", "", "get").then(res => {
					// console.log(res);
					this.goodsCate = res.data.data
					const arr=[]
					this.goodsCate.forEach((item,index)=>{
						arr.push(...item.childlist)
					})
					this.goodsCate=arr;
					console.log(this.goodsCate);
				})
			},
			//滚动事件
			scollChange(e){
				var scroll_Top=parseInt(e.detail.scrollTop) 
				for(var i=0;i<this.reactInfo.length;i++){
					if(scroll_Top>this.reactInfo[i].top&&scroll_Top<this.reactInfo[i].bottom){
						console.log(i)
						this.current=i
						this.scrollTop=i*50
					}
				}
			},
			// 菜单选择
			changeCate(index) {
				this.current = index
				this.mainCurrent=index
				this.scrollTop=index*50
			},
			//获取节点信息
			getDomInfo() {
				var top=0;
				var bottom=0;
				var temp=0;
				for(var i=0;i<this.goodsCate.length;i++){
					let view = uni.createSelectorQuery().in(this).select("#cate"+i);
					view.fields({
						size: true,
						scrollOffset: true,
						rect:true
					}, data => {
						top=temp;
						bottom=temp+parseInt(data.height); 
						temp+=parseInt(data.height)
						this.reactInfo[i]={top:top,bottom:bottom}
					}).exec();
				}
				
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	page {
		height: 100%;
	}

	.content {
		height: 100%;
	}

	.searchArea {
		width: 100%;
		height: 110rpx;
		display: flex;
		align-items: center;

		.searchBox {
			width: 90%;
			height: 70rpx;
			background: #F0F0F0;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			border-radius: 10rpx;

			navigator {
				display: flex;
				justify-content: center;
				align-items: center;
				color: #C0C0C0;
				font-size: 26rpx;
			}
		}

		image {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.cateArea {
		width: 100%;
		height: 100%;
		display: flex;
		border-top: 10rpx solid #F7F7F7;

		.cateLeft {
			width: 290rpx;
			height: 100%;
			background: #F7F7F7;
		}

		.cateRight {
			text {
				font-size: 22rpx;
				color: #C0C0C0;
			}

			.goodsCate {
				width: 100%;
				text-align: center;
				margin-top: 28rpx;

				image {
					width: 150rpx;
					height: 150rpx;
				}

				.conArea {
					display: flex;
					flex-wrap: wrap;
					margin-top: 20rpx;

					view {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin: 0 10rpx 0 0;

						text {
							margin-top: 10rpx;
						}
					}
				}
			}
		}
	}

	.cateList {
		display: flex;
		flex-direction: column;

		.cateItem {
			height: 100rpx;
			font-size: 26rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
		}
	}

	.active {
		background: #fff;
	}

	.cateLine {
		width: 10rpx;
		height: 30rpx;
		border-left: 3px solid #007AFF;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
	
	
</style>
