<template>
  <div class='header'>
    <div class="content-wrapper">
      <div class="avatar">
    <img width="64" height="64" :src="seller.avatar" alt="">
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
      <div class="support-count" v-if="seller.supports"  @click="isshowdetali()">
        <span class="count">{{seller.supports.length}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" >
      <span class="bulletin-title"></span>
      <span class="bulletin-text" @click="isshowdetali()">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
      </div>
    <div class="background">
      <img  :src="seller.avatar" alt="">
    </div>
    <div class="detali" v-show="showdetali">
        <div class="detali-wrapper clearfx">
             <div class="main">
                  <h1 class="name">{{seller.name}}</h1>
             </div>
               <star :size="48" :score="seller.score"></star>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
            </div>
           <ul class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon "></span>
              <span class="text">{{item.type+1}}:{{item.description}}</span>
              </li>
        </ul>
         <div class="title">
                <div class="line"></div>
                <div class="text">商家公共</div>
                <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        </div>
        <div class="detali-close" @click="isshowdetali()">
        <i class="icon-close">&Chi;</i>
        </div>
    </div>
</div>
</template>

<script>
   import star from '@/components/star/star'
    export default{
      data () {
         return {
                showdetali : false
       }
    },
     methods: {
           isshowdetali () {
              this.showdetali = !this.showdetali
           }
       },
       components :{
               star
       },
      props:['seller']
       }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
       position:relative
       color:#fff
       background:rgba(7,17,27,0.5)
       overflow:hidden
      .content-wrapper
          position:relative
          padding 24px 12px 18px 24px
          font-size:0
          .avatar
             display: inline-block
             vertical-align: top;
          .content
             display: inline-block
             margin-left: 16px
             .title
                margin 2px 0 8px 0
                .brand
                  vertical-align: top;
                  display:inline-block
                  width:30px
                  height:18px
                  background-image: url('./brand@2x.png')
                  background-size: 30px 18px;
                  background-repeat: no-repeat;
                .name
                  margin-left: 6px
                  font-size: 16px
                  line-height: 18px
                  font-weight: bold
             .description
                 margin-bottom: 10px
                 line-height: 12px
                 font-size: 12px
                .icon
                     display:inline-block
                     vertical-align: top;
                     width: 12px;
                     height: 12px;
                     background-image: url('./decrease_1@2x.png')
                     background-size:12px 12px;
                     background-repeat: no-repeat;
                .text
                     line-height: 12px
                     font-size: 10px
          .support-count
               position:absolute;
               right:12px;
               bottom:14px;
               padding:0 8px;
               height:24px;
               line-height:24px;
               border-radius: 14px;
               background:rgba(0,0,0,0.2);
               text-align: center;
               .count
                  vertical-align: top;
                  font-size: 10px;
               .icon-keyboard_arrow_right
                  margin-left: 2px;
                  line-height: 24px;
                  font-size: 10px;
  .header .bulletin-wrapper
            position: relative;
            height: 28px;
            line-height: 28px;
            padding: 0 22px 0 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background: rgba(7,17,27,0.2);
            .bulletin-title
                display: inline-block;
                vertical-align: top;
                margin-top: 8px;
                width: 22px;
                height: 12px;
                background-image:url("./bulletin@2x.png")
                background-size: 22px 12px;
                background-repeat: no-repeat;
            .bulletin-text
                vertical-align: top;
                margin: 0 4px;
                font-size: 10px;
  .header  .background
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                -webkit-filter: blur(10px);
                filter: blur(10px);
   .header  .detali
                position: fixed;
                z-index: 100;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                opacity: 1;
                background: rgba(7,17,27,0.8);
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                .detali-wrapper
                        display: inline-block;
                        width: 100%;
                        min-height: 100%;
                        .main
                           margin-top:64px;
                           padding-bottom: 64px;
                           .name
                               text-align:center
                        .title
                          display: flex;
                          width: 80%;
                          margin: 28px auto 24px auto
                          .line      
                            -webkit-box-flex: 1;
                            -ms-flex: 1;
                            flex: 1;
                            position: relative;
                            top: -6px;
                            border-bottom: 1px solid rgba(255,255,255,0.2);
                         .supports
                           width: 80%;
                           margin: 0 auto;
                           .support-item
                              padding: 0 12px;
                              margin-bottom: 12px;
                              font-size: 0;
                              .icon 
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                                vertical-align: top;
                                margin-right: 6px;
                                background-size: 16px 16px;
                                background-repeat: no-repeat;
                              .text
                                line-height: 16px;
                                font-size: 12px;
                          .bulletin
                             width: 80%;
                             margin: 0 auto; 
                             .content 
                               padding: 0 12px;
                               line-height: 24px;
                               font-size: 12px;

                .detali-close
                        position: relative;
                        width: 32px;
                        height: 32px;
                        margin: -64px auto 0 auto;
                        clear: both;
                        font-size: 32px;
 
</style>

