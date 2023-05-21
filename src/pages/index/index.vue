<template>
	<view>
		<view class="content" @click="handleContentTap">
			<view class="title">上<view class="title-logo">良查找朋</view>友</view>
			<view class="search-playground">
				<view class="search">
					<view class="search-select">
						<custom-select ref="searchSelect" :options="searchMethodOptions"
							@change="handleSearchMethodOptionsChange"></custom-select>
					</view>
					<view class="search-input">
						<input type="text" placeholder="请输入手机号或微信号" v-model="searchInput">
					</view>
				</view>
				<view>
					<button class="search-btn" @click="handleSearchBtnClick">搜索</button>
				</view>
			</view>
		</view>
		<view class="footer">
			<button class="footer-btn"><text>❤邀请我的爱人，见证彼此的爱情❤</text></button>
		</view>
	</view>
</template>

<script>
	import CustomSelect from "../../components/CustomSelect/CustomSelect.vue"
	export default {
		components: {
			CustomSelect
		},
		data() {
			return {
				searchMethodOptions: ["手机号", "微信号"],
				searchMethod: "手机号",
				searchInput:''
			}
		},
		onLoad() {

		},
		methods: {
			handleSearchMethodOptionsChange(value) {
				console.log(value)
			},
			handleContentTap() {
				this.$refs.searchSelect.close()
			},
			handleSearchBtnClick(){
				if(this.searchInput!=''){
					let input=this.searchInput
					let method=this.searchMethod
					wx.navigateTo({
						url:`/pages/searchResult/searchResult?method=${method}&input=${input}`
					})
				}else{
					wx.showToast({
						icon:"none",
						title:"搜索内容不能为空"
					})
				}
				
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		display: flex;
		align-items: flex-end;
		font-size: 36rpx;
		margin-top: 120rpx;
		margin-bottom: 40rpx;
	}

	.title-logo {
		font-size: 50rpx;
		margin: 0 4rpx 0 4rpx;
	}

	.search-playground {
		width: 80%;
	}

	.search {
		display: flex;
		width: 100%;
		margin-bottom: 120rpx;
	}

	.search-select {
		width: 30%;
		margin-right: 10rpx;
	}

	.search-input {
		width: 70%;
		border: 4rpx solid #716e77;
		border-radius: 8rpx;
		font-size: 36rpx;
		color: #716e77;
	}

	.search-btn {
		width: 80%;
		background-color: #e79686;
		color: #fff;
	}

	.search-result {
		height: 400rpx;
		width: 100%;
		border: 4rpx dashed #716e77;
		border-radius: 20rpx;
		margin-top: 40rpx;
	}

	.footer {
		display: flex;
		position: absolute;
		width: 100%;
		align-items: center;
		bottom: 160rpx;
	}

	.footer-btn {
		background-color: #ecd6c7;
		color: #716e77
	}
</style>
