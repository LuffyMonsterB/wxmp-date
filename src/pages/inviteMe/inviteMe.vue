<template>
	<view class="main">
		<view class="each-area">
			<view class="each-title">
				<text>邀请我的人</text>
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in eachList" :key="index">
					<view class="item-info">
						<view class="item-name">
							<text>{{item.name}}</text>
						</view>
						<view class="item-number">
							<text>24小时后，此消息消失</text>
						</view>
					</view>
					<button type="default" size="mini" style="margin: 0;">绑定为爱人</button>
				</view>
			</view>
			<view class="middle">
				<button type="default" size="mini"><text>前往完善个人信息后可以直接绑定对方</text></button>
			</view>
		</view>
		<view class="footer">
			<button class="footer-btn"><text>邀请他人</text></button>
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
			}
		},
		onShow(){
			this.$request.getInvitemeList().then(res=>{
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
.middle{
	text-align: center;
	margin-top: 100rpx;
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
		width: 60%;
	}

	.item-number {
		color: #7A7E83;
		font-size: 24rpx;
	}
	.footer {
		display: flex;
		position: absolute;
		width: 100%;
		align-items: center;
		bottom: 50rpx;
	}
	
	.footer-btn {
		width: 80%;
/* 		background-color: #ecd6c7;
		color: #716e77 */
	}
</style>
