<template>
	<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>
		
		<block v-for="(item,index) in resdata" :key="index">
			<swiper-item>
				<view class="swiper-item">
					<image :src="item.src" lazy-load style="height: 350upx;"></image>						
				</view>
			</swiper-item>
		</block>
					
	</swiper>
	
</template>

<script>
	export default{
		props:{
			resdata: Array
		},
		
	}
</script>

<style>
</style>
