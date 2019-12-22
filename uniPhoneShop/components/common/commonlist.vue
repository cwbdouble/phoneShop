<template>
	<view style="width: 372.5upx; background: #ffffff;">
		<image :src="item.imgUrl" mode="widthFix"></image>
		<view class="font-md pl-2 font-weight">
			{{item.title}}
		</view>
		<view class="font pl-2" style="color: #dddddd;">
			{{item.desc}}
		</view>
		<view class="d-flex pl-2 mb-2">
			<price>{{item.nprice}}</price>
			<text class="ml-2 font-sm a-self-end line-through" style="color: #dddddd;">{{item.oprice}}</text>
		</view>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue';
	export default{
		components:{
			price
		},
		props:{
			item:Object
		}
	}
</script>

<style>
</style>
