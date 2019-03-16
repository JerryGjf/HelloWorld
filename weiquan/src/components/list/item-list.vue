<template>
	<div class="item-list">
		<div class="filter">
			<div class="conditions">
				<div class="el-dropdown"
				     @click="showSelect(1)">
					<span>
						{{filter1}}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</div>
			</div>
			<div class="conditions"
			     style="text-align: center">
				<div class="el-dropdown"
				     @click="showSelect(2)">
					<span>
						{{filter2}}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</div>
			</div>
			<div class="conditions"
			     style="text-align: right">
				<div class="el-dropdown"
				     @click="showSelect(3)">
					<span>
						{{filter3}}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="weui-panel weui-panel_access">
				<div class="weui-panel__bd">
					<a href="javascript:void(0);"
					   class="weui-media-box weui-media-box_appmsg">
						<div class="weui-media-box__hd">
							<img class="weui-media-box__thumb"
							     src="@/assets/imgs/test.png">
						</div>
						<div class="weui-media-box__bd">
							<h4 class="weui-media-box__title">招聘企业合伙人</h4>
							<p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
						</div>
					</a>
					<a href="javascript:void(0);"
					   class="weui-media-box weui-media-box_appmsg">
						<div class="weui-media-box__hd">
							<img class="weui-media-box__thumb"
							     src="@/assets/imgs/test.png">
						</div>
						<div class="weui-media-box__bd">
							<h4 class="weui-media-box__title">找工作</h4>
							<p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
						</div>
					</a>
				</div>
				<div class="weui-panel__ft">
					<a href="javascript:void(0);"
					   class="weui-cell weui-cell_access weui-cell_link">
						<div class="weui-cell__bd">查看更多</div>
						<span class="weui-cell__ft"></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				filter1: '宝鸡',
				filter2: '全部分类',
				filter3: '默认排序',
				filterList1: [{
					label: '飞机票',
					value: 0
				}, {
					label: '火车票',
					value: 1
				}, {
					label: '的士票',
					value: 2
				}, {
					label: '公交票',
					value: 3
				}, {
					label: '其他',
					value: 4
				}]
			}
		},
		methods: {
			showSelect (num) {
				this.weui.picker(this.filterList1, {
					onConfirm: (result) => {
						console.log(result)
						switch (num) {
							case 1:
								this.filter1 = result[0].label
								break
							case 2:
								this.filter2 = result[0].label
								break
							case 3:
								this.filter3 = result[0].label
								break
						}
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.item-list {
	  .filter {
	    display: flex;
	    padding: 0 8px;
	    .conditions {
	      flex: 1;
	    }
	  }
	  .list {
	    .weui-panel:before {
	      border-top: 0px;
	    }
	    .weui-media-box_appmsg .weui-media-box__thumb {
	      border-radius: 50%;
	    }
	  }
	}
</style>

