<template>
	<view class="home">
		<view class="home-logo">
			<img class="logo" :src="homeInfo.logo" />
		</view>
		<view 
			 v-for="(item, index) in homeInfo.homeList" :key="index" 
			 :class="index == 2 ? 'home-img' : 'home-bg'" 
			 :style="{
			 	backgroundImage: index == 2 ? 'url('+homeInfo.homeImg+'?v='+Math.random()+')' : ''
			 }"
			 @click="onLink(index)"
		>
			<view :class="index == 2 ? 'home-title color1' : 'home-title'">{{item.title}}</view>
			<view :class="index == 2 ? 'home-desc color1' : 'home-desc'">{{item.desc}}</view>
		</view>
	</view>
</template>

<script>
	const APP = getApp();
	import config from '@/static/config.js';
	export default {
		data() {
			return {
				homeInfo: config.homeInfo
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
            onLink(index){
				if(index == 0){
					uni.navigateTo({
						url: '/pages/describe/describe'
					})
				} else if(index == 1){
					uni.navigateTo({
						url: '/pages/step/step'
					})
				} else if(index == 2){
					uni.navigateTo({
						url: '/pages/compute/compute?v='+ Math.random()
					})
				}
			}
		}
	}
</script>

<style scoped>
	.home{
		height: 100%;
		background: linear-gradient(180deg, #F34832 0%, #F44B35 20.18%, #FFD6D4 43.52%, #F4F5F7 60.87%, #F4F5F7 100%);
		background-size: 100% 100%;
		padding: 0px 10px 20px 10px;
	}
	.home-logo{
		text-align: center;
		padding-top: 64rpx;
	}
	.logo{
		width: 160rpx;
	}
	.home-bg{
		background: #fff;
		border-radius: 10px;
		padding: 35px 20px;
		margin-top: 20px;
	}
	.home-img{
		padding: 35px 20px;
		border-radius: 10px;
		margin-top: 20px;
		background-size: 100% 100%;
	}
	.home-title{
		font-size: 36rpx;
		color: #F1462D;
		font-weight: 500;
	}
	.home-desc{
		font-size: 24rpx;
		margin-top: 20px;
		color: #333333;
	}
	.color1{
		color: #fff;
	}
</style>