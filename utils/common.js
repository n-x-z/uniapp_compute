const HTTP_URL="";
// #ifdef MP-WEIXIN
const BASE_URL = HTTP_URL;
// #endif
// #ifndef MP-WEIXIN
const BASE_URL = process.env.NODE_ENV === 'production' ? HTTP_URL : '/api';
// #endif

var config={
	url:BASE_URL,
	userInfo:undefined,
	regionCode:""
};
export default config