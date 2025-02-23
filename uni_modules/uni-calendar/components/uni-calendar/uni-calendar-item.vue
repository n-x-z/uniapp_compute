<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'uni-calendar-item--disable':weeks.disable,
		'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
		'uni-calendar-item--checked':(calendar.fullDate === weeks.fullDate && !weeks.isDay) ,
		'uni-calendar-item--before-checked':weeks.beforeMultiple,
		'uni-calendar-item--multiple': weeks.multiple,
		'uni-calendar-item--after-checked':weeks.afterMultiple,
		}"
	 @click="choiceDate(weeks)">
		<view class="uni-calendar-item__weeks-box-item">
			<text v-if="selected&&weeks.extraInfo" class="uni-calendar-item__weeks-box-circle"></text>
			<text class="uni-calendar-item__weeks-box-text" :class="{
				'uni-calendar-item--isDay-text': weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.date}}</text>
			<!-- <text v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				}">{{todayText}}</text> -->
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.isDay ? todayText : (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn)}}</text>
			<text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar-item__weeks-lunar-text" :class="{
				'uni-calendar-item--extra':weeks.extraInfo.info,
				'uni-calendar-item--isDay-text':weeks.isDay,
				'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">{{weeks.extraInfo.info}}</text>
		</view>
	</view>
</template>

<script>
	import {
	initVueI18n
	} from '@dcloudio/uni-i18n'
	import messages from './i18n/index.js'
	const {	t	} = initVueI18n(messages)
	export default {
		emits:['change'],
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			todayText() {
				return '今日'
			},
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	$uni-font-size-base:14px;
	$uni-text-color:#333;
	$uni-font-size-sm:12px;
	$uni-color-error: #ffffff;
	$uni-opacity-disabled: 0.3;
	$uni-text-color-disable:#c0c0c0;
	$uni-primary: #2979ff !default;
	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.uni-calendar-item__weeks-box-text {
		font-size: 28rpx;
		font-weight: 500;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90rpx;
		height: 90rpx;
	}

	.uni-calendar-item__weeks-box-circle {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 8px;
		height: 8px;
		border-radius: 8px;
		// background-color: $uni-color-error;

	}

	.uni-calendar-item--disable {
		background-color: rgba(249, 249, 249, $uni-opacity-disabled);
		color: $uni-text-color-disable;
	}

	.uni-calendar-item--isDay-text {
		color: #3C61DF;
	}

	.uni-calendar-item--isDay {
		background-color: #3C61DF;
		color: #fff;
		// border-radius: 14rpx;
	}

	.uni-calendar-item--extra {
		// color: $uni-color-error;
		opacity: 0.8;
	}

	.uni-calendar-item--checked {
		background-color: #3C61DF;
		color: #fff;
		// border-radius: 14rpx;
	}
    .uni-calendar__weeks-item{
		background-color: #3C61DF;
		
		color: #fff;
	}
	.uni-calendar-item--multiple {
		background-color: #3C61DF;
		
		color: #fff;
	}
	.uni-calendar-item--before-checked {
		background-color: #3C61DF;
		color: #fff;
		// border-radius: 7px;
	}
	.uni-calendar-item--after-checked {
		background-color: #3C61DF;
		color: #fff;
		// border-radius: 7px;
	}
</style>
