<template>
	<view class="d-flex">
		<image :src="resdata.big.src" mode="" style="width: 373upx; height: 530upx; border-right: solid 2upx #f5f5f5;"></image>
		<view class="d-flex flex-column">
			<image :src="resdata.smalltop.src" style="width:375upx; height: 264upx;border-bottom: 2upx solid #f5f5f5;" mode=""></image>
			<image :src="resdata.smalltop.src" style="width:375upx; height: 264upx;" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			resdata:Object
		}
	}
</script>

<style>
</style>
