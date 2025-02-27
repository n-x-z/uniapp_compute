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
  mounted() {
      this.$nextTick(() => {
        // 使用uni.setDocumentTitle来设置标题，如果要设置meta标签，可以使用下面的方法
        const head = document.getElementsByTagName('head')[0];
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, user-scalable=no'; // 设置你需要的值
        head.appendChild(meta);
      });
    },
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
