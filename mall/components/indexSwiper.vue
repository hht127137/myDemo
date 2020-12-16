<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" @change="changeSwiper">
			<swiper-item v-for="(item,index) in content" :key="index">
				<view class="swiper-item">
					<image :src="item.image" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
		   return{
			   
		   }	
		},
		methods:{
			changeSwiper(e){
				// console.log(e);
			}
		},
		props:["content"]
	}
</script>

<style>
	swiper{
		width: 100%;
		height: 350rpx;
	}
	
	swiper image{
		width: 100%;
		height: 350rpx;
	}
</style>
