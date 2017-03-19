<template>
<div>
 <v-header :seller="seller" ></v-header>
  <div class="tab">
      <div class='tab-item'>
        <router-link to="goods">商品</router-link>
      </div>
       <div class='tab-item'>
         <router-link to="ratings">评论</router-link>
      </div>
       <div class='tab-item'>
       <router-link to="seller">商家</router-link>
      </div>
  </div>
  <div class="content">
      <transition>
        <router-view></router-view>
    </transition>
  </div>

  </div>
</template>

<script>
  import header from '@/components/header/header'
   import axios from 'axios'

   const ERR_OK = 0

 export default {
    data () {
         return {
                seller:{}
       }
    },
   created () {
    axios.get('/api/seller')
            .then(
              res => {
                if (res.data.errno === ERR_OK) {
                  this.seller = res.data.data
                }
              }
              )
    },
    components: { 'v-header':header }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
     .tab
      display:flex
      width:100%
      line-height: 40px
      border-bottom:1px solid rgba(7,17,27,0.1)
      .tab-item
        flex:1
        text-align:center
       .active
         color:red           
</style>
