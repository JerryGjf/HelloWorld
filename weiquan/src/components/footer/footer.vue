<template>
	<div class="footer">
		<router-link to="/homepage">
			<div class="item">
				<i class="icon icon-home"></i>
				<span>首页</span>
			</div>
		</router-link>

		<router-link to="/mcb">
			<div class="item">
				<i class="icon icon-home"></i>
				<span>商家</span>
			</div>
		</router-link>

		<router-link to="/tz">
			<div class="item">
				<i class="icon icon-home"></i>
				<span>发布</span>
			</div>
		</router-link>

		<router-link to="/user">
			<div class="item">
				<i class="icon icon-home"></i>
				<span>发现</span>
			</div>
		</router-link>

		<router-link to="/my">
			<div class="item">
				<i class="icon icon-home"></i>
				<span>我的</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data () {
			return {}
		}
	}
</script>

<style lang="less" scoped>
	.footer {
	  position: fixed;
	  display: flex;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  background: #f7f7f7;
	  font-family: 微软雅黑;
	  font-size: 12px;
	  z-index: 999;
	  a {
	    display: block;
	    width: 25%;
	    text-decoration: none;
	    &.router-link-active {
	    }
	  }
	  .item {
	    height: 44px;
	    flex: 1;
	    text-align: center;
	  }
	  .icon {
	    display: block;
	    width: 100%;
	    height: 20px;
	    background-repeat: no-repeat;
	    background-size: 24px;
	    background-position: center;
	    padding-top: 5px;
	  }
	  .icon-home {
	    background-image: url(btn_product_shouye@2x.png);
	  }
	  .icon-mcb {
	    background-image: url(btn_product_financial@2x.png);
	  }
	  .icon-tz {
	    background-image: url(btn_product_licai@2x.png);
	  }
	  .icon-user {
	    background-image: url(btn_product_my@2x.png);
	  }
	  .router-link-active {
	    .icon-home {
	      background-image: url(btn_product_shouye_light@2x.png);
	    }
	    .icon-mcb {
	      background-image: url(btn_product_financia_light@2x.png);
	    }
	    .icon-tz {
	      background-image: url(btn_product_licai_light@2x.png);
	    }
	    .icon-user {
	      background-image: url(btn_product_my_light@2x.png);
	    }
	  }
	}
</style>
