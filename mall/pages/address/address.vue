<template>
	<view class="content" v-show="show">
		<!-- 地址信息 -->
		<view v-if="addressList&&addressList.length>0">
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="options" @click="onClick($event,index,item.id)" @change="change" v-for="(item,index) in addressList" :key="index">
					<view class="addressCon">
						<view class="user">
							<text>{{item.username}}</text>
							<text>{{item.telphone}}</text>
							<view class="default" v-if="item.default==1">默认</view>
						</view>
						<view class="address">
							{{item.city}}{{item.address}}
						</view>
					</view>
				</uni-swipe-action-item>		
			</uni-swipe-action>
		</view>
		<view class="addAdressTil" v-else>
			<image src="../../static/default/address.png" mode=""></image>
			<view>用户没有收获地址,请添加!</view>
		</view>
		<view style="height: 120rpx;"></view>
		<!-- 添加新地址 -->
		<view class="addAdress" @click="addAdress">添加新地址</view>
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
				}, {
					text: '编辑',
					style: {
						backgroundColor: '#0FB9F9'
					}
				}],
				addressList:[],
				show:false
			}
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		onShow() {
			this.getData();
		},
		methods: {
			onClick(e,index,id) {
				if(e.content.text=='删除'){
					uni.showModal({
					    title: '提示',
					    content: '你确定删除这条消息',
					    success: (res)=> {
							console.log(res)
					        if (res.confirm) {
								this.$request('/api/member/addressDel',{id:id},'post').then(res=>{
									console.log(res);
									if(res.data.code==1){
										this.addressList.splice(index,1)
										uni.showToast({
											title:res.data.msg,
											icon:'none'
										})
									}
								})
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}else if(e.content.text=='编辑'){
					uni.navigateTo({
						url:'./editAddress?id='+id
					})
				}
			},
			change(e, index) {
				
			},
			addAdress(){
				uni.navigateTo({
					url:"../addAdress/addAdress"
				})
			},
			getData(){
				console.log(1)
				if(uni.getStorageSync('token')){
					this.$request('/api/member/addressList','','post').then(res=>{
						console.log(res);
						this.show=true;
						if(res.data.code==1){
							this.addressList=res.data.data
							uni.showToast({
								title:'获取地址列表成功',
								icon:'none'
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	/deep/.uni-swipe_box{
		border-bottom: 1rpx solid #CCCCCC;
	}
	
	.addressCon {
		display: flex;
		flex-direction: column;
		padding: 0 20rpx;
		height: 130rpx;
		
		justify-content: center;
	}

	.user {
		display: flex;
		font-size: 26rpx;
		margin: 10rpx;
	}

	.address {
		font-size: 25rpx;
		color: #CAC9CB;
		/* margin: 10rpx; */
		margin-left: 10rpx;
	}

	.default {
		padding: 0 10rpx;
		background: #0FB9F9;
		color: #fff;
		font-size: 22rpx;
		margin-left: 18rpx;
	}

	.addAdress {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		background: #0FB9F9;
		position: fixed;
		bottom: 0;
		left: 0;
		color: #fff;
		text-align: center;
		font-size: 28rpx;
	}
	
	.addAdressTil{
        display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 150rpx;
		box-sizing: border-box;
		color: #A6A5A6;
		image{
			width: 550rpx;
			height: 300rpx;
		}
		view{
			margin-top: 20rpx;
		}
	}
</style>
