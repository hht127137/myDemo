<template>
	<view class="content">
		<!-- 顶部导航 -->
		<myHeader :recommon_cate="recommon_cate"></myHeader>
		<view class="headerHigh"></view>
		<!-- 轮播图 -->
		<indexSwiper :content="banner"></indexSwiper>
		<!-- 服务导航 -->
		<indexService :content="actTitle" :icon="icon"></indexService>
		<!-- 广告 -->
		<adIndex :content="ad"></adIndex>
		
		
		<!-- 商品区域 -->
		<view class="goodsBox" v-for="(item,index) in goodsList" :key="index">
			<!-- 楼层标题 -->
			<myTitle :title="item.content[0].title"></myTitle>
			<!-- 楼层广告 -->
			<view class="floorAd" v-if="item.content.length==1">
				<image src="../../static/image/cate1Ad.jpg" mode=""></image>
			</view>
			<view v-else>
				<!-- 楼层广告 -->
				<listener :content="item.content"></listener>
			</view>
			<!-- 商品区域 -->
			<goodsList :content="item.product"></goodsList>
		</view>
	</view>
</template>

<script>
	import request from "../../http/request.js"
	import qs from 'qs'
	
	import myHeader from "@/components/header.vue"
	import indexSwiper from "@/components/indexSwiper.vue"
	import indexService from "@/components/service.vue"
	import adIndex from "@/components/adIndex.vue"
	import myTitle from "@/components/title.vue"
	import goodsList from "@/components/goodsList.vue"
	import listener from "@/components/listener.vue"
	
	import dataJson from "@/data/index.js"
	
	export default {
		data() {
			return {
				title:'智能手机',
				recommon_cate:[
					{catename:"推荐"},
					{id:1,catename:"手机"},
					{id:2,catename:"声学"},
					{id:7,catename:"配件"},
					{id:8,catename:"生活"}
				],
				banner:[],
				dataIndex:dataJson,
				actTitle:[],
				icon:[],
				ad:[],
				goodsList:[]
			}
		},
		components:{
			myHeader,
			indexSwiper,
			indexService,
			adIndex,
			myTitle,
			goodsList,
			listener
		},
		onLoad() {
            this.getData()
		},
		methods: {
            getData(){
				request("/nav",qs.stringify({nav_type: [0, 1, 2]}),"post").then(res=>{
					console.log(res.data.data);
					this.banner=res.data.data[0]
					this.actTitle=this.dataIndex.data.act
					this.icon=this.dataIndex.data.icon
					this.ad=this.dataIndex.data.adList
					this.goodsList=this.dataIndex.data.goodsList
					console.log(this.goodsList)
				})
			}
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
	
	
</style>
