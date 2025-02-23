<template>
	<view 
	  class="desc">
	 <view class="back" @click="onBack"></view>
		<view class="desc-bg" v-for="(item, index) in descInfo.descList" :key="index">
			<view class="desc-title">
				<text class="desc-title-font">{{item.title}}</text>
			</view>
			
			<view class="mt10">
				<view class="desc-li" v-for="(item1, index1) in item.list" :key="index1">
					 <text class="desc-title-font fs14">{{item1.title}}</text>
				     <view class="mt10" v-for="(item2, index2) in item1.list" :key="index2">
				         <view > {{item2.title}}</view>
						 <view > {{item2.desc}}</view>
				     </view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	const APP = getApp();
	import config from '@/static/config.js';
	export default {
		data() {
			return {
				descInfo: config.desc
			}
		},
		onReady(){
			console.log(config, 'config')
		},
		onShow() {

		},
		computed: {
			
		},
		created() {

		},
		methods: {
			onBack(){
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
            
		}
	}
</script>

<style scoped>
	.desc{
		height: 100%;
		/* height: 1000px; */
		/* background-repeat: no-repeat;
		background-size: cover; */
		background: linear-gradient(180deg, rgba(243, 72, 50, 1) 0%, rgba(244, 75, 53, 1) 20.18%, rgba(255, 214, 212, 1) 43.52%, rgba(244, 245, 247, 1) 60.87%, rgba(244, 245, 247, 1) 100%);;
		padding: 40px 10px 20px 10px;
	}
	.desc-bg{
		background: #fff;
		border-radius: 10px;
		padding: 30px 20px;
		margin-top: 20px;
	}
	.desc-title{
		text-align: center;
		color: rgba(241, 70, 45, 1);
		font-size: 36rpx;
		
		margin: auto;
	}
	.desc-title-font{
		color: rgba(238, 66, 41, 1);
		position: relative;
	}
	.desc-title-font::after{
		content: '';
		position: absolute;
		left: 0;
		background: rgba(222, 46, 20, 1);
		width: 100%;
		height: 20rpx;
		opacity: 0.16;
		border-radius: 10rpx;
		bottom: -2px;
	}
	.desc-li{
		margin-top: 30px;
		font-size: 24rpx;
		line-height: 46rpx;
	}
    .back{
    	color: #fff;
    	position: absolute;
    	top: 10px;
    	width: 10px; 
    	left: 16rpx;
    	display: inline-block;
    	  height: 10px; 
    	  margin: 10px;
    	  border-left: 2px solid;
    	  border-bottom: 2px solid;
    	  transform: rotate(45deg);
    }
	.fs14{
		font-size: 28rpx;
	}
	.mt10{
		margin-top: 20rpx;
	}
	.mt20{
		margin-top: 40rpx;
	}
</style>