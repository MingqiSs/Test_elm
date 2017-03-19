<template>
  <div class='header'>
  <div class="content-wrapper">
    <div class="avatar">
   <img width="64" heigth="64" :src="seller.avatar" alt="">
    </div>
    <div class="content">
       <div class="title">
       <span class="brand"></span>
       <span class="name">{{seller.name}}</span>
       </div>
       <div class="description">
       {{seller.description}}/{{seller.deliveryTime}}分钟送达
       </div>
       <div v-if="seller.supports" class="supports">
        <span class="icon"></span>
       <span class="text">{{seller.supports[0].description}}</span>
       </div>
    </div>
  </div>
  <div class="bulletin-wrapper"></div>
</div>
</template>

<script>
    export default{
      props:['seller']
       }
</script>

<style>

</style>
