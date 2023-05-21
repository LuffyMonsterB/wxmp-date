<template>
	<view>
		<view v-show="!isLogin">
			<view class="login-btn">
				<button type="primary" open-type="getUserInfo" @click="getUserProfile"
					style="background-color: #E79686;">授权用户登录</button>
			</view>
		</view>
		<view v-show="isLogin">
			<view class="avatar-area">
				<image class="avatar" :src="userInfo.avatarUrl"></image>
				<view class="user">
					<image :src="userInfo.genderIcon" mode="widthFix" style="width: 40rpx;"></image>
					<text>.</text>
					<text class="user-name">{{userInfo.nickName}}</text>
				</view>
			</view>
			<view class="user-info">
				<view class="user-line" @click="handleUserLineClick">
					<text>昵称</text>
					<view>
						<text>{{userInfo.nickName}}</text>
					</view>

				</view>
				<view class="user-line">
					<text>性别</text>
					<view>
						<text>{{userInfo.gender}}</text>
					</view>
				</view>
				<view class="user-line" @click="handleUserLineClick()">
					<text>微信号</text>
					<view>
						<text>{{userInfo.wechat?userInfo.wechat:""}}</text>
						<i class="right"></i>
					</view>

				</view>
				<view class="user-line" @click="handleUserLineClick()">
					<text>手机号</text>
					<view>
						<text>{{userInfo.phone?userInfo.phone:""}}</text>
						<i class="right"></i>
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
				userInfo: {
					nickName: '',
					avatarUrl: "",
					gender: '男',
					genderIcon: '',
					wechat: '',
					phone: ''
				},
				avatarUrl: "../../static/avatar.jpg",
				maleIcon: '../../static/male.png',
				femaleIcon: '../../static/female.png',
				isLogin: false
			}
		},
		methods: {
			handleUserLineClick() {
				console.log('handle user line click')
			},
			getUserProfile(e) {
				let code = ''
				wx.login({
					success(res) {
						code = res.code
					}
				})
				wx.getUserProfile({
					desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						let data = {
							...res,
							code: code
						}
						this.$request.login(data).then(res => {
							if (res.code == 200) {
								uni.setStorageSync('token', res.data.token)
								let userInfo = res.data.user_info
								this.userInfo.avatarUrl = userInfo.avatarUrl ? userInfo
									.avatarUrl : this.avatarUrl
								this.userInfo.nickName = userInfo.nickName ? userInfo
									.nickName : ""
								this.userInfo.gender = userInfo.gender == 0 ? '男' : '女'
								this.userInfo.genderIcon = userInfo.gender == 0 ? this
									.maleIcon : this.femaleIcon
								this.userInfo.wechat = userInfo.wechatNum ? userInfo
									.wechatNum : ""
								this.userInfo.phone = userInfo.phone ? userInfo.phone : ""
								this.isLogin = true
							}
						})
					}
				})
				// wx.getUserProfile({
				// 	desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				// 	success: (res) => {
				// 		let data = {
				// 			...res,
				// 			code: code
				// 		}
				// 		let appId = 'wx2e5c7c0d4a6395ab'
				// 		let appSecret = '573e086ff03c2b8a1f44cd4b99fa393f'
				// 		wx.request({
				// 			url: 'http://10.22.148.111:8080/user/wxlogin',
				// 			method: 'POST',
				// 			data: {
				// 				...data,
				// 				appId: appId,
				// 				appSecret: appSecret
				// 			},
				// 			success: (res) => {
				// 				if (res.data.code == 200) {
				// 					console.log(res)
				// 					let userInfo = res.data.data.user_info
				// 					this.userInfo.avatarUrl = userInfo.avatarUrl ? userInfo
				// 						.avatarUrl : this.avatarUrl
				// 					this.userInfo.nickName = userInfo.nickName ? userInfo
				// 						.nickName : ""
				// 					this.userInfo.gender = userInfo.gender == 0 ? '男' : '女'
				// 					this.userInfo.genderIcon = userInfo.gender == 0 ? this
				// 						.maleIcon : this.femaleIcon
				// 					this.userInfo.wechat = userInfo.wechatNum ? userInfo
				// 						.wechatNum : ""
				// 					this.userInfo.phone = userInfo.phone ? userInfo.phone : ""
				// 					wx.setStorage({
				// 						key: "token",
				// 						data: res.data.data.token,
				// 						encrypt: false, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
				// 					})
				// 					this.isLogin = true
				// 				} else {
				// 					wx.showToast({
				// 						icon: "error",
				// 						title: "服务器异常"
				// 					})
				// 				}
				// 			}
				// 		})
				// 	}
				// })


			},
		},
	}
</script>

<style>
	page {
		height: 100%;
	}

	.login-btn {
		display: flex;
		justify-content: center;
		margin-top: 50%;
	}

	.avatar-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #ECD6C7;
		padding-bottom: 80rpx;
	}

	.avatar {
		height: 150rpx;
		width: 150rpx;
		margin-top: 40rpx;
		border-radius: 50%;
		border: 6rpx solid #f4f4f4;
	}

	.user {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20rpx;
	}

	.user-name {
		margin-left: 8rpx;
		color: #444444;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx 60rpx 40rpx 60rpx;
	}

	.user-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		color: #444444;
		background-color: #E79686;
	}

	i {
		border: solid #444444;
		border-width: 0 4rpx 4rpx 0;
		display: inline-block;
		padding: 8rpx;
		margin-left: 4rpx;
	}

	.right {
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}
</style>
