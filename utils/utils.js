import config from "../utils/common.js";
/* 公共请求方法 */
export function _postHttp(url,data) {
	return new Promise((reslove, reject) => {
		uni.request({
			url:config.url + url,
			method: "POST",
			data,
			header: {
				'content-type':'application/json',
				'Mdm-Token': uni.getStorageSync('token')
			},
			success: res => {
				if (res.statusCode == 200) {
					if(res.data.code=== 1){
						reslove(res.data)
					}else if(res.data.code===10016){
						uni.removeStorageSync('token')
						uni.reLaunch({
							url: "/pages/landingPage/landingPage"
						})
					} else{
						uni.showToast({
							title: res.data.message,
							mask: true,
							icon:'none',
							duration: 2500
						})
					}
					
				}else{
					uni.showToast({
					title: res.message,
					mask: true,
					icon:'none',
					duration: 2500
					})
				}
			},
			fail: err => {
				reject(err)
			}
		})
	})
}
export function _getHttp(url,data) {
	return new Promise((reslove, reject) => {
		uni.request({
			url:config.url + url,
			method: "GET",
			data,
			header: {
				'content-type':'application/json',
				'Mdm-Token': uni.getStorageSync('token')
			},
			success: res => {
			   
				if (res.statusCode == 200) {
					if(res.data.code=== 1){
						reslove(res.data)
					}else if(res.data.code===10016){
						uni.removeStorageSync('token')
						uni.reLaunch({
							url: "/pages/landingPage/landingPage"
						})
					} else{
						uni.showToast({
							title: res.data.message,
							mask: true,
							icon:'none',
							duration: 2500
						})
					}
				}else{
					uni.showToast({
						title: res.errMsg,
						mask: true,
						icon:'none',
						duration: 2500
					})
				}
			},
			fail: err => {
				reject(err)
			}
		})
	})
}
/* 加载 */
export function showLoading(p){
  uni.showLoading({
    title: p || '加载中...',
    mask: true
  })
}
/* 轻提示 */
export function showToast(p, icon) {
  uni.showToast({
    title: p || '',
    mask: true,
    icon: icon || 'none',
	duration: 2500
  })
}


