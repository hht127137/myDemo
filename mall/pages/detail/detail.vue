<template>
	<view class="content">
		<!-- 轮播图 -->
		<detailSwiper :content="goodsDetail.image" swiperHeight="550rpx"></detailSwiper>
		<!-- 商品详情 -->
		<view class="goodsDetail">
			<view class="title">
				<label>新品</label>
				{{goodsDetail.title}}
			</view>
			<view class="desc">
				{{goodsDetail.description}}
			</view>
			<view class="priceBox">
				<view class="price">
					<template v-if="skus.length>0">
						<text>￥{{skus[0].market_price}}</text>
						<text>￥{{skus[0].price}}</text>
					</template>
				</view>

				<text>
					<template v-if="skus.length>0">
					月销量:{{skus[0].sold_count}}件
					</template>
				</text>
			</view>
		</view>
		<!-- 服务 -->
		<view class="service" @click="showService">
			<view>
				<view><text class="iconfont">&#xe60d;</text>全场包邮</view>
				<view><text class="iconfont">&#xe60d;</text>7天无理由退货(激活后不支持)</view>
			</view>
			<view class="iconfont">&#xe60b;</view>
		</view>
		<!-- 商品规格 -->
		<view class="goodsSpecs" @click="showAttr">
			<view>
				规格
				<text>{{selectAttr}}</text>
			</view>
			<view class="iconfont">&#xe60b;</view>
		</view>
		<!-- 图文详情(规格参数) -->
		<view class="picDetail">
			<view class="detail">
				<view v-for="(item,index) in detail" :key="index" @click="checkDetail(index)" :class="{'active':current==index}">{{item}}</view>
			</view>
			<view class="picCon" v-if="current==0">
				<image src="../../static/image/d1.jpg" mode="widthFix"></image>
				<image src="../../static/image/d2.jpg" mode="widthFix"></image>
				<image src="../../static/image/d3.jpg" mode="widthFix"></image>
			</view>
			<view class="shopspecs" v-else>
				<view class="title">
					基本参数
				</view>
				<view class="specs">
					<view>
						<view>品牌</view>
						<view>OPPO</view>
					</view>
					<view>
						<view>OPPO型号</view>
						<view>Reno5 5G</view>
					</view>
					<view>
						<view>电池类型</view>
						<view>不可拆卸式电池</view>
					</view>
					<view>
						<view>CPU核心数</view>
						<view>无</view>
					</view>
					<view>
						<view>机身颜色</view>
						<view>月夜黑 星河入梦 极光蓝</view>
					</view>
					<view>
						<view>手机类型</view>
						<view>拍照手机 智能手机</view>
					</view>
					<view>
						<view>操作系统</view>
						<view>Android/安卓</view>
					</view>
					<view>
						<view>CPU品牌</view>
						<view>不详</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>
		<!-- 加入购物车 -->
		<view class="goodsControl">
			<view class="iconBtn">
				<view>
					<image src="../../static/tab-home-gray.png" mode=""></image>
					<text>首页</text>
				</view>
				<view>
					<image src="../../static/tab-cart-gray.png" mode=""></image>
					<text>购物车</text>
				</view>
			</view>
			<view class="textBtn">
				<view @click="showAttr(0)">加入购物车</view>
				<view @click="showAttr(1)">立即购买</view>
			</view>
		</view>
		<!-- 服务弹窗 -->
		<explain @close="closeService" v-if="servicePop"></explain>
	    <!-- 属性弹窗 -->
		<attrDialog :type="type" @getSkus="goodsSkus" :content="goodsAttr" :skus="skus" @close="closeAttr" v-if="attrBool"></attrDialog>
	</view>
</template>

<script>
	import request from '@/http/request.js'
	import explain from '@/components/explainPopup.vue'
	import attrDialog from '@/components/attrDialog.vue'
	import detailSwiper from '@/components/indexSwiper.vue'

	export default {
		data() {
			return {
				goodsDetail: {},
				detail: ["图文详情", "规格参数"],
				current: 0,
				servicePop:false, //服务弹窗显示
				attrBool:false,//属性弹窗显示
				skus:[],
				goodsAttr:[],
				attrSkus:{},//商品信息
				type:1,
				selectAttr:'请选择商品尺寸规格'
			}
		},
		components:{
			explain,
			attrDialog,
			detailSwiper
		},
		onLoad() {
			this.getData();
		},
		//在页面内容销毁之前设置为默认值
		beforeDestroy(){
			this.$store.commit('defaultAttr')
		},
		methods: {
			getData() {
				
				request("/product?id=12", "", "get").then(res => {
					console.log(res);
					this.goodsDetail = res.data.data
					this.skus=res.data.data.skus
					console.log(this.skus)
					
					//拆分重组商品属性
					var arr=[];
					this.goodsDetail.attrGroup.forEach((item,indexs)=>{
						var obj={}
						obj['attrGroup']=item;
						obj['attrSet']=this.goodsDetail.attrItems[indexs];
						arr.push(obj);
					})
					this.goodsAttr=arr
				})
			},
			// 切换图文详情和规格
			checkDetail(index) {
				this.current = index
			},
			// 显示服务弹窗
			showService(){
				this.servicePop=true
			},
			//关闭服务弹窗
			closeService(){
				this.servicePop=false
			},
			//关闭属性弹窗
			closeAttr(){
				this.selectAttr=this.$store.state.attrTxt
				this.attrBool=false
			},
			//显示属性弹窗
			showAttr(typeid){
				this.type=typeid
				this.attrBool=true
			},
			//商品信息
			goodsSkus(e){
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F8F6F8;
	}

	swiper {
		width: 100%;
		height: 520rpx;
		display: flex;
		justify-content: center;
		background: #fff;

		image {
			display: block;
			width: 70%;
			height: 450rpx;
			margin: 0 auto;
		}
	}

	.goodsDetail {
		padding: 0 20rpx;
		border-top: 1px solid #CCCCCC;
		border-bottom: 1px solid #CCCCCC;
		background: #fff;

		.title {
			font-size: 26rpx;
			color: #000;

			label {
				display: inline-block;
				background: #09B0D6;
				color: #fff;
				text-align: center;
				padding: 5rpx;
				box-sizing: border-box;
				margin-right: 10rpx;
			}
		}

		.desc {
			color: #C7C5CD;
			font-size: 14rpx;
		}

		.priceBox {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.price {
				text:nth-child(1) {
					color: #EB5967;
				}

				text:nth-child(2) {
					color: #9D999A;
					text-decoration: line-through;
					font-size: 16rpx;
				}
			}
		}
	}

	.priceBox>text {
		font-size: 24rpx;
		color: #9D999A;
	}

	.goodsDetail>view {
		margin: 20rpx 0;
	}

	.service {
		display: flex;
		font-size: 24rpx;
		color: #9A9898;
		padding: 20rpx 20rpx;
		justify-content: space-between;
		background: #fff;

		view {
			display: flex;
			align-items: center;

			view {
				margin: 0 10rpx;
			}
		}

		text {
			color: #10B0E3;
		}
	}

	.goodsSpecs {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx;
		margin: 18rpx 0;
		font-size: 26rpx;
		color: #A7A6A5;
		background: #fff;

		text {
			color: #333333;
			margin-left: 18rpx;
		}
	}

	.picDetail {
		display: flex;
		flex-direction: column;
		background: #fff;

		.detail {
			display: flex;

			view {
				width: 50%;
				text-align: center;
			}

			padding: 22rpx 0;
			font-size: 20rpx;
			font-weight: bold;
			border-bottom: 1px solid #C0C0C0;
		}

		image {
			width: 100%;
		}
	}

	.shopspecs {
		width: 90%;
		border: 1px solid #CCCCCC;
		margin: 20rpx auto;
		font-size: 26rpx;
		box-sizing: border-box;

		.specs {
			view {
				width: 100%;
				display: flex;
				padding: 10rpx 0 10rpx 10rpx;
				box-sizing: border-box;
			}
		}

		.title {
			background: #EAE8EA;
			padding: 15rpx 0 15rpx 10rpx;
		}
	}

	.specs>view {
		border-bottom: 1px solid #C0C0C0;
	}

	.active {
		color: #10B0E3;
	}

	.iconBtn {
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}

	.goodsControl {
		width: 100%;
		display: flex;
		height: 110rpx;
		font-size: 26rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
	}

	.iconBtn {
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.iconBtn>view {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #9A989A;
	}

	.textBtn {
		flex: 4;
		display: flex;

		view {
			width: 50%;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		view:nth-child(1) {
			background: #00AEF4;
		}

		view:nth-child(2) {
			background: #0078FF;
		}
	}

	.bg{
		position: fixed;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,.5);
	}

    .attrDialog{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff;
		height: 1070rpx;
	}
	
	.topDetail{
	    display: flex;
		border-bottom: 5rpx solid #E4DFE4;
		padding: 0rpx 28rpx 20rpx;
		box-sizing: border-box;
		image{
			width: 230rpx;
			height: 230rpx;
			margin-top: -60rpx;
		}
	}
	
	.topDetail>view{
		font-size: 26rpx;
		margin: 18rpx 0 0 30rpx;
		text{
			font-size: 34rpx;
			color: #C97381;
		}
	}
	
	.attr{
		margin-left: 30rpx;
	}
</style>
