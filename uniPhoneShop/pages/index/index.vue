<template>
	<view>
		<scroll-view scroll-x class="scroll-row" style="height: 80upx;" :scroll-into-view="scrollinto">
			<view class="scroll-row-item px-2" style="height: 80upx; line-height: 80upx;" :class="tabIndex===index ? 'main-text-color':''"
			 v-for="(item,index) in tabBar" :key="index" @click="handleTabBar(index)" :id="'tab'+ index">

				<text :class="tabIndex===index ? 'border-bottom':''" class="main-border-color">{{item.name}}</text>
			</view>

		</scroll-view>
		<swiper :current="tabIndex" :style="'height:'+ scrollH +'px'" :duration="100" @change="getTab">
			<swiper-item v-for="(item,index) in newsItem" :key="index">
				<scroll-view scroll-y :style="'height:'+ scrollH +'px'">
					<block v-for="(list,listIndex) in item.list" :key="listIndex">
						<!-- 轮播图组件 -->
						<swiper-image v-if="list.type=='swipers'" :resdata="list.data"></swiper-image>

						<!-- 图标列表 -->
						<index-nav v-else-if="list.type=='indexnav'" :resdata="list.data"></index-nav>

						<template v-else-if="list.type=='threeAdv'">
							<divider></divider>
							<three-adv :resdata="list.data"></three-adv>
							<divider></divider>
						</template>
						<!-- <card  headTitle="每日" bodyCover="/static/images/demo/demo4.jpg" ></card> -->
						<view class="row flex-wrap j-sb" v-else-if="list.type=='commonList'">
							<block v-for="(item2,index2) in list.data" :key="index2">
								<commonlist :item="item2" :index="index2"></commonlist>
							</block>
						</view>


					</block>
				</scroll-view>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>









	</view>
</template>

<script>
	let tab = [{
			name: "推荐"
		},
		{
			name: "体育"
		},
		{
			name: "热点"
		},
		{
			name: "财经"
		},
		{
			name: "娱乐"
		},
		{
			name: "军事"
		},
		{
			name: '八卦'
		},
		{
			name: '学习'
		},
		{
			name: "军事"
		},
		{
			name: '八卦'
		},
		{
			name: '学习'
		}
	];

	let demo1 = [{
		type: 'swipers',
		data: [{
				"src": "/static/images/demo/demo4.jpg"
			},
			{
				"src": "/static/images/demo/demo4.jpg"
			},
			{
				"src": "/static/images/demo/demo4.jpg"
			},
			{
				"src": "/static/images/demo/demo4.jpg"
			},
		]
	}, {
		type: 'indexnav',
		data: [{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},

		]
	}, {
		type: 'threeAdv',
		data: {
			big: {
				src: "/static/images/demo/demo1.jpg"
			},
			smalltop: {
				src: "/static/images/demo/demo10.jpg"
			},
			smallbottom: {
				src: "/static/images/demo/demo10.jpg"
			}
		}

	}, {
		type: 'commonList',
		data: [{
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			},
			{
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			},
			{
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			}, {
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			}
		]
	}, {
		type: 'swipers',
		data: [{
				"src": "/static/images/demo/demo4.jpg"
			},
			{
				"src": "/static/images/demo/demo4.jpg"
			},
			{
				"src": "/static/images/demo/demo4.jpg"
			},
			{
				"src": "/static/images/demo/demo4.jpg"
			},
		]
	}, {
		type: 'indexnav',
		data: [{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},
			{
				"src": "/static/images/indexnav/1.png",
				"text": "新品发布"
			},

		]
	}, {
		type: 'threeAdv',
		data: {
			big: {
				src: "/static/images/demo/demo1.jpg"
			},
			smalltop: {
				src: "/static/images/demo/demo10.jpg"
			},
			smallbottom: {
				src: "/static/images/demo/demo10.jpg"
			}
		}

	}, {
		type: 'commonList',
		data: [{
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			},
			{
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			},
			{
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			}, {
				title: '米家空调',
				desc: '1.5匹支流变频',
				imgUrl: '/static/images/demo/list/4.jpg',
				nprice: 2299,
				oprice: 2699
			}
		]
	}];
	
	let demo2 = [
		{
			type: 'swipers',
			data: [{
					"src": "/static/images/demo/demo4.jpg"
				},
				{
					"src": "/static/images/demo/demo4.jpg"
				},
				{
					"src": "/static/images/demo/demo4.jpg"
				},
				{
					"src": "/static/images/demo/demo4.jpg"
				},
			]
		},
	];
	import swiperImage from '@/components/index/swiper-image.vue';
	import indexNav from '@/components/index/index-nav.vue';
	import threeAdv from '@/components/index/three-adv.vue';
	import card from '@/components/common/card.vue';
	import commonlist from '@/components/common/commonlist.vue';
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdv,
			card,
			commonlist
		},
		data() {
			return {
				scrollinto: '',
				scrollH: 800,
				tabIndex: 0,
				newsItem: [{
					name: "推荐",
					list: [],

				}, {
					name: "体育",
					list: []
				}],

				tabBar:[]
			}
		},
		onLoad() {
			//获取可视化区域高度  
			uni.getSystemInfo({
				success: (res) => {
					//中间区域高度等于可视化高度-tab栏高度
					console.log(res)
					this.scrollH = res.windowHeight - uni.upx2px(80);
					console.log(this.scrollH)
				}
			})
			this.__init();
		},
		methods: {
			__init(){
				let arr = []
				this.tabBar = tab
				for(let i=0;i<this.tabBar.length;i++){
					let obj = {
						list:[]
					}
					if(i===0){
						obj.list = demo1
					}
					arr.push(obj)
					
				}
				this.newsItem = arr;
			},
			handleTabBar(index) {
				if (index == this.tabIndex) {
					return
				}
				this.tabIndex = index;
				this.scrollinto = 'tab' + index;
				this.addData()

			},
			getTab(event) {
				this.handleTabBar(event.detail.current)
				
			},
			//加载数据
			addData(){
				let index = this.tabIndex
				this.newsItem[index].list = demo2
			}
			
		}
	}
</script>

<style>

</style>
