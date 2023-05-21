<template>
	<view class="main">
		<view class="each-area">
			<view class="each-title">
				<text>已相互绑定的爱人</text>
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in eachList" :key="index">
					<view class="item-info">
						<view class="item-name">
							<text>{{item.name}}</text>
						</view>
						<view class="item-number">
							<text style="margin-right: 16rpx;">微信:{{item.weixin}}</text>
							<text>手机号:{{item.phone}}</text>
						</view>
					</view>
					<button type="default" size="mini" style="margin: 0;">删除</button>
				</view>
			</view>
		</view>
		<view class="single-area">
			<view class="single-title">
				<text>我单相思的爱人</text>
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in singleList" :key="index">
					<view class="item-info">
						<view class="item-name">
							<text>{{item.name}}</text>
						</view>
						<view class="item-number">
							<text style="margin-right: 16rpx;">微信:{{item.weixin}}</text>
							<text>手机号:{{item.phone}}</text>
						</view>
					</view>
					<button type="default" size="mini" style="margin: 0;">删除</button>
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
					name: '张三',
					weixin: '12345678',
					phone: '12345678'
				}, {
					name: '李四',
					weixin: '12345678',
					phone: '12345678'
				}],
				singleList: [{
					name: '王五',
					weixin: '12345678',
					phone: '12345678'
				}, {
					name: '沈六',
					weixin: '12345678',
					phone: '12345678'
				}, {
					name: '刘七',
					weixin: '12345678',
					phone: '12345678'
				}]
			}
		},
		onShow(){
			this.$request.getFollowList().then(res=>{
				console.log(res)
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 0 10rpx 0;
		border-bottom: 2rpx solid #f3f3f3;
	}

	.item-info {
		width: 75%;
	}

	.item-number {
		color: #7A7E83;
		font-size: 24rpx;
	}
</style>
