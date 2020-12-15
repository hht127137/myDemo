<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" @change="changeSwiper">
			<swiper-item>
				<view class="swiper-item">
					<image src="../static/image/banner1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../static/image/banner2.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../static/image/banner3.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../static/image/banner4.jpg" mode=""></image>
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
		}
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
