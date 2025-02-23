import headerBg from '@/static/images/header-bg.jpeg'
import logo from '@/static/images/logo.png'
import homeImg from '@/static/images/home-img.png'

var config={
	homeInfo: {
		logo: logo,
		homeImg: homeImg,
		homeList:[
			{title: '保底抽佣意义', desc: '了解外卖保底抽佣是什么?保底抽佣对我司意义?'},
			{title: '商户保底线获取', desc: '了解商户保底线、抽佣比，信息获取途径'},
			{title: '计算器', desc: '输入输入菜品、饮料等信息计算'}
		],
	},
	stepInfo: {
		stepList: [
			{
				title: '美团保底线/抽佣比信息获取途径',
			    step: [
					{title: ['第一步:点击“我的”', '第二步:点击“配送设置”'], img: headerBg},
					{title: ['第三步:点击“美团专送-升级版介绍”'], img:''},
					{title: ['第四步:查看信息'], img:''},
				],
			},
			{
				title: '饿了么保底线/抽佣比信息获取途径', 
				step: [
					{title: ['第一步:点击管理', '第二步:点击全部应用'], img:''},
					{title: ['第三步:点击配送服务下合作方案'], img:''},
					{title: ['第四步:点击生效中'], img:''},
					{title: ['第五步:查看信息'], img:''},
				]
			}
		],
	},
	describe:{
		background: headerBg,
		title: '保底抽佣意义',
		list: [
			{
				title: '商户痛点',
				descList:[
					'外卖订单中小额订单占比高，平台按比例抽佣导致利润空间被压缩。',
					'客单价提升面临挑战,难以平衡成本和利润。'
				],
			},
			{
				title: '平台保底抽佣机制',
				descList:[
					'为保障平台利益，平台设定保底抽佣金额。',
					'当订单金额低于一定标准时,平台按照固定金额收取佣金,而非按比例抽成。'
				],
			},
			{
				title: '可口可乐合作优势',
				descList:[
					'助力提升客单价:据统计，约50%的外卖订单金额低于保底线。商户加购可口可乐产品,可有效提升订单金额，且无需额外支付佣金,直接提升利润空间。'
				],
			},
			{
				title: '保底抽佣意义视频讲解',
				descList:[],
				video: ''
			},
		]
	},
	compute: {
		background: headerBg,
		title: '抽佣计算器',
		desc: '保底抽佣轻松计算',
		input: '输入',
		output: '输出',
		perCapitaPriceTitle: '爆款产品加购后优惠金额',
		unit: '单位(元)',
		perCapitaPrice: '券后优惠价格',
		perCapitaPriceTip: '人均价格',
		tolinklook: '保底抽佣意义?',
		tolinkget: '商户保底线获取',
		commissionTitle: '保底抽拥信息',
		commissionRatio: '抽拥比例',
		floors: '保底金额',
		deliveryPrice: '饮料外卖价格',
		clear: '清空',
		compute: '计算',
		guaranteedCommissionLine: '平台保底抽佣线',
		guaranteedCommissionPrice: '平台保底抽佣金额',
		drinkBeforePrice: '加饮料前客单价',
		drinkAfterPrice: '加饮料后客单价',
		priceImprove: '客单价提升'
	}
	
};
export default config