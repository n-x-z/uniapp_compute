<template>
	<view 
	  class="describe"
	  :style="{backgroundImage: 'url('+describeInfo.background+'?v='+ver+')'}"
	  >
	    <view class="back" @click="onBack"></view>
		<view class="describe-header">{{describeInfo.title}}</view>
		<view class="mt40 describe-content">
			<view class="describe-bg" v-for="(item, index) in describeInfo.list" :key="index">
				<view class="describe-title">{{item.title}}</view>
				<view class="describe-desc" v-for="(item1, index1) in item.descList" :key="index1">
				     {{item1}}
				</view>
				<video type="video/mp4" autoplay="autoplay" controls="controls" loop
						muted v-if="item.video" class="video" :src="videoSrc"></video>
			</view>
		</view>
		
	</view>
</template>

<script>
	const APP = getApp();
	import config from '@/static/config.js';
	// let videoSrc = "https://47.117.115.251:8080/uniapp-compute/static/video.mp4";
	export default {
		data() {
			return {
				describeInfo: config.describe,
				videoSrc: ''
			}
		},
		onReady(){
			console.log(config, 'config')
		},
		onShow() {
			this.videoSrc = window.location.origin + '/uniapp-compute/' + this.describeInfo.list[3].video.split('./')[1]
            
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
.describe{
	/* height: 100%; */
	height: 100px;
	    background-repeat: no-repeat;
	    background-size: 100% auto;
	    padding: 60px 0px 0px 0px;
	    background-position: center;
	
}
.describe-content{
	padding: 0 12px;
	background: linear-gradient(180deg, #F34832 0%, #F3C0BD 70.54%, #F4F5F7 90.87%, #F4F5F7 100%);
}
.describe-header{
	font-size: 60rpx;
	color: #fcefd5;
	margin-left: 30px;
}
.describe-bg{
	background: #fff;
	border-radius: 10px;
	padding: 30px 20px;
	margin-top: 20px;
}
.describe-title{
	background: linear-gradient(90deg, #FE6F4D 0%, #EF4134 100%);
		
	display: inline-block;
	color: #fff;
	padding: 3px 15px;
	font-weight: 500;
	border-radius: 20px;
	font-size: 30rpx;
}
.describe-desc{
	margin-top: 10px;
	opacity: 0.8;
	font-size: 26rpx;
	padding-left: 15px;
	position: relative;
}
.describe-desc::before{
	position: absolute;
	content: '';
	width: 5px;
	height: 5px;
	background: #df533b;
	border-radius: 5px;
	left: 5px;
	top: 7px;
}
.mt40{
	margin-top: 40px;
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
	.video{
		width: 100%;
		margin-top: 20px;
		border-radius: 10px;
	}
</style>