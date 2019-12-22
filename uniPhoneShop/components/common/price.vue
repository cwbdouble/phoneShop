<template>
	<view class="d-flex main-text-color">
		<text class="font-sm">￥</text><slot/>
	</view>
</template>

<script>
	export default{
		props:{
			price:[String, Number]
		}
	}
</script>

<style>
</style>
