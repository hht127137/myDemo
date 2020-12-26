<template>
	<view class="content">
		<view class="userInfo">
			<text>收货人:</text>
			<view class="msg">
				<input type="text" v-model="query.username" value="" placeholder="收货人姓名" />
				<view class="sex">
					<view v-for="(item,index) in sex" :key="index" :class="{'sexActive':current==index}" @click="selectSex(index)">{{item}}</view>
				</view>
			</view>
		</view>

		<view class="userInfo">
			<text>电话号码:</text>
			<input v-model="query.telphone" class="msg" type="text" value="" placeholder="收货人的联系电话" />
		</view>

		<view class="userInfo">
			<text>收货地址:</text>
			<region-picker class="region" @change="region_change" :value="350104">
				<input class="msg" type="text" value="" v-model="query.city" placeholder="请选择收货地址" />
			</region-picker>
		</view>

		<view class="userInfo">
			<text>详细地址:</text>
			<textarea class="msg" value="" v-model="query.address" placeholder="请输入详细地址" />
		</view>
		
		<view class="setDefault">
			<text>默认地址</text>
			<switch @change="switchCh"></switch>
		</view>
		
		<view class="saveAdress" @click="saveAdress">
			保存收货地址
		</view>
		
	</view>
</template>

<script>
	import regionPicker from "@/components/region-picker/region-picker.vue"
	
	export default {
	        data() {
	            return {
	                pickerValueDefault: [0, 0, 0],
					query:{
						username:"",
						telphone:"",
						city:"",
						address:"",
						default:0,
						sex:0
					},
					sex:['先生','女士'],
					current:0
	            }
	        },
	        components: {
	            regionPicker  
	        },
	        methods: {
	           region_change(e){
				   this.query.city=e.detail.value.join(" ")
			   },
			   switchCh(e){
				   if(e.target.value){
					   this.query.default=1;
				   }else{
					   this.query.default=0;
				   }
			   },
			   saveAdress(){
				   console.log(this.query)
				   //规则验证
				   if(this.check.checkUser(this.query.username)) return;
				   if(this.check.checkTel(this.query.telphone)) return;
				   if(this.check.checkCity(this.query.city)) return;
				   if(this.check.checkAddress(this.query.address)) return;
				   
				   this.$request('/api/member/addressAdd',this.query,'post').then(res=>{
					   console.log(res);
					   if(res.data.code==1){
						   uni.showToast({
						   	  title:res.data.msg,
							  icon:'none'
						   })
					   }
				   })
			   },
			   selectSex(index){
				   this.current=index;
				   this.query.sex=index;
			   }
	        }
		}
</script>

<style lang="scss">
	.content{
		padding: 0 20rpx;
	}
	
	.sexActive{
		background: #00ADF5;
		color: #fff !important;
	}
	
	.userInfo{
		display: flex;
		border-bottom: 1rpx solid #CCCCCC;
		margin: 20rpx 0;
		text{
			flex: 2;
			font-size: 26rpx;
		}
		.msg{
			flex: 9;
			font-size: 28rpx;
			padding-bottom: 16rpx;
			input{
				width: 100%;
				border-bottom: 1rpx solid #CCCCCC;
				font-size: 28rpx;
				padding-bottom: 16rpx;
			}
		}
		.sex{
			display: flex;
			margin: 16rpx 0 0 0;
			view{
				border: 1rpx solid #EAE8EA;
				color: #CAC9CB;
				font-size: 24rpx;
				padding: 5rpx 10rpx;
				margin-right: 18rpx;
			}
		}
	}
	
	textarea{
		height: 130rpx;
	}
	
	.saveAdress{
		width: 88%;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 auto;
		background: #00ADF5;
		color: #fff;
		font-size: 26rpx;
		text-align: center;
		border-radius: 100rpx;
		margin-top: 50rpx;
	}
	
	.region{
		flex: 9;
	}
	
	.setDefault{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
	}
</style>
