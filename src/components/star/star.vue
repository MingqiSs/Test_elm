<template>
    <div class="star-wrapper">
       <div class="star" :class="starType">
        <span class="star-item" v-for="item in itemClass"></span>
       </div>
    </div>
</template>
<script>
   export default{
       computed :{
          starType () {
                 return 'star-' + this.size
          },
          itemClass () {
          }
       },
        props:['score']
   }
</script>
