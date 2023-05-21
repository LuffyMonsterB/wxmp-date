<template>
	<view>
		<view class="select-box">
			<view class="select-current" @click.stop="openClose">
				<text class="current-label">{{current.label}}</text>
			</view>
			<view class="option-list" v-if="isShow">
				<text class="options" v-for="(item,index) in innerOptions" :key="item.index" :data-index="item.index" :data-label="item.label" @click.stop="optionTap">
					{{item.label}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"CustomSelect",
		props:{
			options:{
				type:Array,
				default:[]
			},
			defaultIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				isShow:false,
				current:{},
				innerOptions:[]
			};
		},
		methods:{
			openClose(){
				this.isShow=!this.isShow
			},
			optionTap(e){
				let dataset=e.target.dataset
				this.current={index:dataset.index,label:dataset.label}
				this.isShow=false
				this.$emit('change',{...this.current})
			},
			close(){
				this.isShow=false
			}
		},
		created() {
			let innerOptions=[]
			this.options.forEach((option,index)=>{
				innerOptions.push({index:index,label:option})
			})
			this.innerOptions=innerOptions
			let currentIndex=this.defaultIndex
			this.current={index:this.innerOptions[currentIndex].index,label:this.innerOptions[currentIndex].label}
		}
	}
</script>

<style>
.select-box {
  position: relative;
  width: 100%;
  font-size: 36rpx;
}

.select-current {
  position: relative;
  width: 100%;
  padding: 0 10rpx;
  border: 4rpx solid #716e77;
  border-radius: 8rpx;
  box-sizing: border-box;
}
.select-current::after {
  position: absolute;
  display: block;
  right: 16rpx;
  top: 30rpx;
  content: '';
  width: 0;
  height: 0;
  border: 10rpx solid transparent;
  border-top: 10rpx solid #999;
}

.current-name {
  display: block;
  width: 85%;
  height: 100%;
  word-wrap: normal;
  overflow: hidden;
}

.option-list {
  position: absolute;
  left: 0;
  top: 76rpx;
  width: 100%;
  padding: 12rpx 20rpx 10rpx 20rpx;
  border-radius: 6rpx;
  box-sizing: border-box;
  z-index: 99;
  box-shadow: 0rpx 0rpx 1rpx 1rpx rgba(0, 0, 0, 0.2) inset;
  background-color: #fff;
}

.options {
  display: block;
  width: 100%;
  line-height: 70rpx;
  border-bottom: 1rpx solid #eee;
}

.options:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>
