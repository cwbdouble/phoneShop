<template>
	<view class="row text-center m-2">
		<view class="span-4 d-flex flex-column j-center a-center" v-for="(item,index) in resdata" :key="index">
			<image :src="item.src" mode="widthFix" style="width: 60upx; height: 60upx;"></image>
			<text class="font-sm py-1">{{item.text}}</text>
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			resdata: Array
		}
	}
</script>

<style>
</style>
