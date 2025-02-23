<template>
	<view class="container">
	    <view class="compute-header" :style="{backgroundImage: 'url('+computeInfo.background+'?v='+ver+')'}">
			<view class="back" @click="onBack"></view>
			<view class="header">
				<view class="title">{{computeInfo.title}}</view>
				<view class="desc">{{computeInfo.desc}}</view>
			</view>
			<view class="title-lev1 title-input">
			 <view>{{computeInfo.input}}</view>
			 <view>{{computeInfo.unit}}</view>
			</view>
		</view>
		
		<view class="compute-content">
			<view class="bg" style="margin-top: -9px;">
				<view class="title-lev2">
					 {{computeInfo.perCapitaPriceTitle}}
					 <!-- <text v-if="!isShow" @click="tolinklook" class="rightred">{{computeInfo.tolinklook}}</text> -->
				</view>
				<view class="title-lev3">
					<text @click="onTip">
					{{computeInfo.perCapitaPrice}}
					<img class="tip" :src="tip" />
					<text v-if="isTip" class="perCapitaPriceTip">{{computeInfo.perCapitaPriceTip}}</text>
					</text>
					<input class="uni-input" v-model="computeData.perCapitaPrice" type="digit" />
				</view>
				<view class="title-lev2">
				{{computeInfo.commissionTitle}}
				<!-- <text v-if="!isShow" @click="tolinkget" class="rightred">{{computeInfo.tolinkget}}</text> -->
				</view>
				<view class="title-lev3">
					{{computeInfo.commissionRatio}}
					<input class="uni-input" v-model="computeData.commissionRatio" type="digit" />
				</view>
				<view class="title-lev3">
					{{computeInfo.floors}}
					<input class="uni-input" v-model="computeData.floors" type="digit" />
				</view>
				<view class="line"></view>
				<view class="title-lev3">
					{{computeInfo.deliveryPrice}}
					<input class="uni-input" v-model='computeData.deliveryPrice' type="digit" />
				</view>
				<view class="btn">
					<view @click="onClear" class="clear">{{computeInfo.clear}}</view>
					<view @click="onCompute" class="compute">{{computeInfo.compute}}</view>
				</view>
			</view>
			<view class="bg compute-line" v-if="isShow" style="margin-top: 20rpx;">
				<view class="line-left">
					<img class="line-left" :src="line" />
				</view>
				<view class="line-right">
					<img class="line-right" :src="line" />
				</view>
				<view class="title-lev3 up-line">
					<text class="title-red" @click="onUp">
					{{computeInfo.priceImprove}}
					<img class="tip" :src="tip" />
					<text v-if="isUp" class="perCapitaPriceTip">{{computeInfo.drinkAfterPrice}}-{{computeInfo.drinkBeforePrice}}</text>
					</text>
					<view class="p-r">
						<text class="up-bg">
							<img class="up" :src="up" />
						</text>
						<text class="title-red">{{computeData.priceImprove||'-'}}</text>
					</view>
				</view>
				<view class="title-lev3">
					{{computeInfo.guaranteedCommissionLine}}
					<text class="p-r">{{computeData.commissionLine||'-'}}</text>
				</view>
				<view class="title-lev3">
					{{computeInfo.guaranteedCommissionPrice}}
					<text class="p-r">{{computeData.commissionPrice||'-'}}</text>
				</view>
				<view class="line"></view>
				<view class="title-lev3">
					<text class="drink">{{computeInfo.drinkBeforePrice}}</text>
					<text class="p-r">{{computeData.drinkBeforePrice||'-'}}</text>
				</view>
				<view class="title-lev3">
					<text class="drink">{{computeInfo.drinkAfterPrice}}</text>
					<text class="p-r">{{computeData.drinkAfterPrice||'-'}}</text>
				</view>
			</view>
		</view>
	
	     <view v-if="visible">
			<view class="modal-mark"></view>
			 <view class="modal" >
				<view class="modal-bg">
					<view class="modal-close" @click="onclose">✕</view>
					<view class="modal-title">{{computeInfo.modalTip.title}}</view>
					<view class="modal-content">
						<view v-for="(item,index) in computeInfo.modalTip.list" :key="index">
							<view class="modal-flex">
								<view class="compute-index">0{{index+1}}</view>
								{{item.title}}
							</view>
							<img class="modal-img" :src="item.img" />
						</view>
					</view>
				</view>
			</view> 
		 </view>
	   
	</view>
</template>

<script>
	const APP = getApp();
	import config from '@/static/config.js';
	import up from '@/static/images/up.png'
	import line from '@/static/images/line.png'
	import tip from '@/static/images/tip.png'
	export default {
		data() {
			return {
				computeInfo: config.compute,
				up: up,
				line: line,
				tip:tip,
				computeData: {
					ver: 0,
					perCapitaPrice: null,
					commissionRatio: null,
					floors: null,
					deliveryPrice: null,
					commissionLine: null,
					commissionPrice: null,
					drinkBeforePrice: null,
					drinkAfterPrice: null,
					priceImprove: null
				},
				isShow: false,
				isTip: false,
				isUp: false,
				visible: false
			}
		},
		onLoad(options) {
			this.ver = options.v
		},
		onShow() {

		},
		computed: {
		},
		created() {

		},
		methods: {
           onClear(){
				this.computeData = {
					perCapitaPrice: null, // 人均价格
					commissionRatio: null, // 抽佣比例
					floors: null, // 保底金额
					deliveryPrice: null, // 饮料外卖价格
					commissionLine: null,
					commissionPrice: null,
					drinkBeforePrice: null,
					drinkAfterPrice: null,
					priceImprove: null
				}
				this.isShow =  false
           },
           onCompute(){
			   if(!this.computeData.perCapitaPrice ){
				   uni.showToast({
				     title: '请填写'+this.computeInfo.perCapitaPrice,
				     mask: true,
				     icon: 'none',
				   	 duration: 2500
				   })
				   return
			   }
			   if( !this.computeData.commissionRatio){
				   uni.showToast({
					 title: '请填写'+this.computeInfo.commissionRatio,
					 mask: true,
					 icon: 'none',
					 duration: 2500
				   })
				   return
			   }
			   if(!this.computeData.floors ){
				   uni.showToast({
					 title: '请填写'+this.computeInfo.floors,
					 mask: true,
					 icon: 'none',
					 duration: 2500
				   })
				   return
			   }
			   if(!this.computeData.deliveryPrice){
				   uni.showToast({
					 title: '请填写'+this.computeInfo.deliveryPrice,
					 mask: true,
					 icon: 'none',
					 duration: 2500
				   })
				   return
			   }
			   
			   
				// 保底抽佣线 = 抽佣比例 / 保底金额
				this.computeData.commissionLine = ( Number(this.computeData.floors) / (Number(this.computeData.commissionRatio)/100) ).toFixed(2)
				// 保底抽佣金额 = 保底金额 + 饮料外卖价格
				this.computeData.commissionPrice = (Number(this.computeData.floors) + Number(this.computeData.deliveryPrice)).toFixed(2)
				// 加饮料前客单价 = 人均价格
				this.computeData.drinkBeforePrice = Number(this.computeData.perCapitaPrice)
				//【可乐抽佣金额 = 未过保底抽佣现，不抽佣。如果过了抽佣现，可乐抽佣金额 = 可乐售价 * (抽佣比例 + 价格上涨比例)】
				var price = 0
				if(Number(this.computeData.perCapitaPrice) > Number(this.computeData.commissionLine)){
					price = Number(this.computeData.perCapitaPrice) + Number(this.computeData.deliveryPrice) - (Number(this.computeData.deliveryPrice)*Number(this.computeData.commissionRatio/100))
				} else {
					price = Number(this.computeData.perCapitaPrice) + Number(this.computeData.deliveryPrice)
				}
				// 加饮料后客单价 = 人均价格 + 饮料售价 - 可乐抽佣金额
				this.computeData.drinkAfterPrice = price.toFixed(2)
				// 客单价提升 = 加饮料后客单价 - 加饮料前客单价
				this.computeData.priceImprove = (Number(this.computeData.drinkAfterPrice) - Number(this.computeData.drinkBeforePrice)).toFixed(2)
				this.isShow = true
           },
           onBack(){
				uni.navigateTo({
					url: '/pages/index/index'
				})
           },
		   tolinklook(){
				uni.navigateTo({
					url: '/pages/describe/describe'
				})
           },
		   tolinkget(){
				uni.navigateTo({
					url: '/pages/step/step'
				})
           },
		   onTip(){
			   this.visible = true
			   // this.isTip = !this.isTip
		   },
		   onUp(){
		   		this.isUp = !this.isUp
		   },
		   onclose(){
			   this.visible = false
		   }
		}
	}
</script>

<style scoped>
	.container {
		/* padding: 15px; */

	}
	.compute-header{
		color: #333;
		/* height: 220rpx; */
		background-repeat: no-repeat;
		background-size: 100% 210px;
		padding: 60px 24rpx 0px 24rpx;
	}
	.compute-content{
		background: linear-gradient(180deg, #F34832 0%, #F3C0BD 51.54%, #F4F5F7 60.87%, #F4F5F7 100%);
	}
    .title{
		font-size: 28px;
		color: #fcefd5;
		margin-top: 14px;
		margin-left: 14px;
	}
	.desc{
		font-size: 14px;
		color: #fcefd5;
		margin-top: 6px;
		margin-left: 14px;
	}
	.title-input{
		width: 100%;
		height: 50px;
		background-color:rgba(255,255,255,.3) ;
		border-radius: 8px;
		padding:10px 26rpx;
		box-sizing: border-box;
		color: #fff;
		opacity: .8;
		margin-top: 55rpx;
	}
	.drink{
		font-size: 28rpx;
	}
	.title-input view{
		display: inline-block;
	}
	.title-input view:nth-child(2){
		float: right;
	}
	.title-lev1 {
		font-size: 32rpx;
		font-weight: 500;
		border-top: 1px solid #fff;
	}
    .btn{
		width: 100%;
		overflow: hidden;
		margin-top: 60rpx;
		margin-bottom: 10px;
	}
	.bg {
		position: relative;
		background: #fff;
		border-radius: 10px;
		padding: 1px 26rpx 20px 26rpx;
		margin: 24rpx;
	}

	.title-lev2 {
		font-size: 32rpx;
		margin-top: 20px;
	}

	.title-lev3 {
		font-size: 26rpx;
		line-height: 30px;
		font-weight: 400;
	    position: relative;
		margin-top: 14px;
	}
    .line{
		width: 100%;
		height: 1px;
		background-color: #EEEEEE;
		margin-top: 40rpx;
	}
	.title-tip {
		font-size: 20rpx;
		color: #333;
		font-weight: 500;
		opacity: 0.4;
	}

	.uni-input {
		width: 400rpx;
		height: 60rpx;
		border-radius: 60rpx;
		border: 1px solid #D5DAE0;
		/* margin-top: 16rpx; */
		float: right;
		font-size: 26rpx;
		padding-left: 20rpx;
	}
	.clear{
		width: 300rpx;
		line-height: 80rpx;
		text-align: center;
		background: linear-gradient(90deg, rgba(254, 111, 77, 0.18) 0%, rgba(239, 65, 52, 0.18) 100%);
		border-radius: 80rpx;
		color:#EF4135;
		float: left;
	}
	.compute{
		width: 300rpx;
		line-height: 80rpx;
		text-align: center;
		background: linear-gradient(90deg, #FE6F4D 0%, #EF4134 100%);
		border-radius: 80rpx;
		color:#fff;
		float: right;
	}
	.p-r{
		float: right;
		padding-right: 20rpx;
		display: flex;
	}
	.title-red{
		font-size: 36rpx;
		color: #EF4134;
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
	.up-bg{
		width: 40rpx;
		display: block;
		height: 40rpx;
		border-radius: 40rpx;
		line-height: 40rpx;
		text-align: center;
		background: rgba(239, 65, 52, 0.1);
		margin-top: 5px;
		margin-right: 10px;
	}
	.up{
		width: 20rpx;
		height: 20rpx;
	}
	.up-line{
		margin-top: 30px;
		position: relative;
	}
	.up-line::after{
		content: '';
		position: absolute;
		width: 100%;
		left: 0;
		height: 1px;
		background: #EF4134;
		bottom: 2px;
	}
	.line-left{
		width: 20rpx;
		position: absolute;
		left: 20px;
		top: -29rpx;
	}
	.line-right{
		width: 20rpx;
		position: absolute;
		right: 20px;
		top: -29rpx;
	}
	.clear:active{
		background: linear-gradient(90deg, rgba(254, 111, 77, 0.3) 0%, rgba(239, 65, 52, 0.3) 100%);
	}
	.compute:active{
		background: #EF4134;
	}
	.tip{
		width: 25rpx;
		margin-left: 10rpx;
		    vertical-align: middle;
			margin-top: -2rpx;
	}
	.perCapitaPriceTip{
		position: absolute;
		left:40px;
		top: -25px;
		font-size: 22rpx;
		background: #f1f1f1;
		padding: 0px 10px;
		border-radius: 5px;
		color: #999;
	}
	.rightred{
		font-size: 24rpx;
		color: #EF4134;
		text-align: right;
		float: right;
		margin-top: 2px;
	}
	.compute-index{
		width: 20px;
		height: 20px;
		background: #EF4134;
		color: #fff;
		line-height: 20px;
		text-align: center;
		font-size: 28rpx;
		border-radius: 20px;
		margin-right: 10px;
	}
	@keyframes moveUp {
	  from {
	    transform: translateY(100%); /* 从底部开始 */
	    opacity: 0; /* 初始时不可见 */
	  }
	  to {
	    transform: translateY(0); /* 移动到指定位置 */
	    opacity: 1; /* 变为可见 */
	  }
	}
	.modal-mark{
		position: fixed;
		width: 100%;
		height: 100vh;
		bottom: 0;
		background: rgba(0,0,0,0.2);
		z-index: 2;
	}
	.modal{
		position: fixed;
		width: 100%;
		height: 100%;
		bottom: 0;
		max-height: 500px;
		z-index: 3;
		text-align: center;
		/* padding: 10px 20px; */
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		overflow: hidden;
		animation: moveUp 0.3s ease-out; /* 应用动画 */
		background: #fff;

	}
	.modal-bg{
		padding-bottom: 30px;
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
		background: linear-gradient(180deg, rgba(254, 111, 77, 0.25) 0%, rgba(239, 65, 52, 0.2) 50% , rgba(239, 65, 52, 0.1) 100%);
	}
	.modal-close{
		position: absolute;
		left: 15px;
		top: 10px;
		font-weight: bold;
		color: #EF4134;
	}
	.modal-content{
		    
		margin: 30px 20px 0 20px;
		background: #fff;
		border-radius: 20px;
		padding: 15px 20px;
	}
	.modal-title{
		position: relative;
		color: #EF4135;
		font-weight: 600;
		display: inline-block;
		padding: 30px 0px 0 0px;
	}
	.modal-title::after{
		content: '';
		position: absolute;
		background: #EF4135;
		left: 0;
		width: 100%;
		height: 20rpx;
		opacity: 0.16;
		border-radius: 10rpx;
		bottom: -2px;
	}
	.modal-flex{
		display: flex;
		font-size: 28rpx;
	}
	.modal-img{
		width: calc(100% - 40px);
		padding: 20px;
		border-left: 1px solid #D5DAE0;
		margin: 10px;
	}
	
</style>