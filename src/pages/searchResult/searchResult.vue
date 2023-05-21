<template>
	<view>
		<view>您搜索的号码:</view>
		<view class="search-main" v-show="accountExist">
			<view>{{searchInput}}</view>
			<view class="search-account">
				{{searched_user_info}}
			</view>
			
		</view>
		<view v-show="!accountExist">
			账号不存在
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchInput: '',
				searchMethod: '',
				accountExist: false,
				searched_user_info: {},
				followed_users:{},
				follow_users:{},
				bind_users:{},
			}
		},
		onLoad(e) {
			this.searchMethod = e.method
			this.searchInput = e.input
			this.search(this.searchMethod, this.searchInput)

		},

		methods: {
			search(searchMethod, searchInput) {
				if (searchInput != '') {
					let input = searchInput
					this.$request.searchByWechatOrPhone(input).then(res => {
						if (res.code == 200) {
							console.log(res)
							let data=res.data
							this.searched_user_info = data.searched_user_info
							this.follow_users=data.follow_users
							this.followed_users=data.followed_users
							this.bind_users=data.bind_users
							this.accountExist = true
						}
					})

				}
			}
		},
	}
</script>

<style>
.search-main{
	width: 100%;
	display: flex;
	justify-content: center;
}
</style>
