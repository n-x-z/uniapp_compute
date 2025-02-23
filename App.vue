<script>
import config from "@/utils/common.js";
import { getUrlValue } from "@/utils/utils.js";
import { getLogin } from "@/utils/http.js";

export default {
  globalData: {
    BarHeight: 0,
    CustomBar: 0,
    code: "zh-Hans", //当前语言
  },
  onLaunch: function () {
    let that = this;
    uni.getSystemInfo({
      success: function (e) {
        that.$options.globalData.BarHeight = e.statusBarHeight;
        if (e.platform == "android") {
          that.$options.globalData.CustomBar = e.statusBarHeight + 50;
        } else {
          that.$options.globalData.CustomBar = e.statusBarHeight + 45;
        }
      },
    });
	
  },
  onShow: function () {},
  onHide: function () {},
  methods: {
	   getAllToken(dataNew){
		  
	   }
  }
};
</script>

<style>
	uni-page-wrapper{
		background: #f4f6f7;
	}
</style>
