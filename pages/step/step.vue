<template>
	<view 
	  class="step"
	>
	 <view class="back" @click="onBack"></view>
		<view class="step-bg" v-for="(item, index) in stepInfo.stepList" :key="index">
			<view class="step-title">
				<text :class="index == 0 ? 'step-title-font red' : 'step-title-font blue'">{{item.title}}</text>
			</view>
			
			<view class="step-ul">
				<view class="step-li" v-for="(item1, index1) in item.step" :key="index1">
					<view class="step-desc">
						<view v-for="(item2, index2) in item1.title" :key="index2">
						     {{item2}}
						</view>
					</view>
				    
					 <img :class="index == 0 ? 'step-img border-red' : 'step-img border-blue'" :src="item1.img" />
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
				stepInfo: config.stepInfo
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
	.step{
		height: 100%;
		/* height: 1000px; */
		/* background-repeat: no-repeat;
		background-size: cover; */
		background: linear-gradient(180deg, rgba(243, 72, 50, 1) 0%, rgba(244, 75, 53, 1) 20.18%, rgba(255, 214, 212, 1) 60.52%, rgba(244, 245, 247, 1) 80.87%, rgba(244, 245, 247, 1) 100%);;
		padding: 40px 10px 20px 10px;
	}
	.step-bg{
		background: #fff;
		border-radius: 10px;
		padding: 30px 0px;
		margin-top: 20px;
	}
	.step-title{
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
		margin: auto;
	}
	.step-title-font{
		position: relative;
	}
	.step-title-font::after{
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
		height: 20rpx;
		opacity: 0.16;
		border-radius: 10rpx;
		bottom: -2px;
	}
	
	.step-ul{
		    width: 100%;
		display: inline-block;
		
	}
	.step-desc{
		padding-left: 20px;
		height: 40px;
	}
	.step-li{
		width: calc(50% - 10px);
		/* height: 330px; */
		float: left;
		font-size: 24rpx;
		margin-top: 30px;
		padding: 5px;
	}
	.step-img{
		width: 100%;
		height: auto;
		border-radius: 10px;
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
	.red{
		color: #EF4135;
	}
	.red::after{
		background: #EF4135;
	}
	.blue{
		color: #0196ff;
	}
	.blue::after{
		background: #0196ff;
	}
	.border-red{
		/* border: 1px solid #EF4135; */
	}
	.border-blue{
		/* border: 1px solid #0196ff; */
	}
</style>