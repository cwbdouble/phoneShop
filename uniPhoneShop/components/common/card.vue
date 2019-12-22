<template>
	<view class="card">
		<!-- 标题 -->
		<view v-if="showHead" class="p-2 border-bottom main-border-color">
			<slot name="title">
				<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>			
			</slot>
		</view>
		<!-- body -->
		<view>
			<slot></slot>
			<image v-if="bodyCover" :src="bodyCover" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			headTitle: String,
			bodyCover: String,
			showHead:{
				type: Boolean,
				default: true
			}
			
		}
	}
</script>

<style>
</style>
