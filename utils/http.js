import {
	_postHttp,
	_getHttp
} from './utils.js'
import config from "./common.js";
/* 首页 */
export function getIndexInfo(param) {
	return _getHttp('/home',param)
}

