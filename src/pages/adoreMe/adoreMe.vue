<template>
	<view class="main">
		<view class="each-area">
			<view class="list">
				<view class="item" v-for="(item,index) in eachList" :key="index">
					
						<image class="item-avatar" :src="item.avatarUrl"></image>
					
					<view class="item-info">
						<view class="item-name">
							<text>{{item.nickname}}</text>
						</view>
						<view class="item-number">
							<text style="margin-right: 16rpx;">微信:{{item.wechat}}</text>
							<text>手机号:{{item.phone}}</text>
						</view>
					</view>
					<view :class="item.verify?'verify':'unverify'">
						<text>{{item.verify?'已认证':'未认证'}}</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				eachList: [{
					nickname: '张三',
					avatarUrl:'../../static/logo.png',
					wechat: '12345678',
					phone: '12345678',
					verify:1
				}, {
					nickname: '李四',
					avatarUrl:'../../static/logo.png',
					wechat: '12345678',
					phone: '12345678',
					verify:0
				}]
			}
		},
		onShow(){
			this.$request.getFollowedList().then(res=>{
				if(res.code==200){
					console.log(res)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}

	.main {
		height: 100%;
		padding: 20rpx 20rpx 0rpx 0rpx;
	}

	.each-area {
		height: 50%;
		margin-left: 8rpx;
		margin-right: 8rpx;
	}

	.each-title {
		width: 100%;
		padding: 10rpx;
		background-color: #ECD6C7;
		font-weight: bold;
		border-radius: 20rpx;
		color: #E79686;
	}

	.single-area {
		height: 50%;
		margin-left: 8rpx;
		margin-right: 8rpx;
	}

	.single-title {
		width: 100%;
		padding: 10rpx;
		font-weight: bold;
		border-radius: 20rpx;
		background-color: #a39391;
		color: #716e77;
	}

	.list {
		padding: 10rpx 30rpx 10rpx 30rpx;
	}

	.item {
		width: 100%;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 0 10rpx 0;
		border-bottom: 2rpx solid #f3f3f3;
	}
.item-avatar{
	height:66rpx;
	width: 66rpx;
	/* margin-top: 40rpx; */
	margin-right: 8rpx;
	border-radius: 10rpx;
	/* border: 1rpx solid #f4f4f4; */
}
	.item-info {
		width: 70%;
	}

	.item-number {
		color: #7A7E83;
		font-size: 24rpx;
	}
	.verify{
		font-size: 30rpx;
		color: #82e788;
	}
	.unverify{
		font-size: 30rpx;
		color: #e77c7c;
	}
</style>
