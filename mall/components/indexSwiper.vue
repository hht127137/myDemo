<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" @change="changeSwiper" :style="{height:swiperHeight}">
			<swiper-item v-for="(item,index) in content" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
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
		props:["content","swiperHeight"]
	}
</script>

<style>
	swiper{
		width: 100%;
	}
	
	swiper image{
		width: 100%;
	}
</style>
