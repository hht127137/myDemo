<template>
	<view>
		<view class="adIndex">
			<view class="adIndexLeft">
				<template v-if="content.length>0">
					<image :src="content[0].imgUrl" mode=""></image>
				</template>
			</view>
			<view class="adIndexRight">
				<view>
					<template v-if="content.length>0">
					   <image :src="content[1].imgUrl"></image>
					</template>
				</view>
				<view>
					<template v-if="content.length>0">
					   <image :src="content[2].imgUrl"></image>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["content"],
		onShow(){
			
		}
	}
</script>

<style lang="scss">
	.adIndex{
		display: flex;
		border-top: 20rpx solid #F8F6F8;
		image{
			width: 100%;
			height: 100%;
		}
	}
	
	.adIndex>view{
		width: 50%;
		height: 520rpx;
		view{
			height: 260rpx;
		}
	}
</style>
