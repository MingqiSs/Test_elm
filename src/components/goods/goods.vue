<template>
  <div class="goods">
  <div class="menu-wrapper">
     <ul>
       <li class="menu-item"  v-for="item in goods" @click="addCheKmenu()">
         <span class="text">{{item.name}}</span>
       </li>
     </ul>
  </div>
  <div class="foods-wrapper">
    <ul>
      <li class="food-list food-list-hook" v-for="item in goods">
                 <h1 class="title">{{item.name}}</h1>
                 <ul>
                   <li class="food-item brder-1px" v-for="chiditem in item.foods">
                     <div class="icon">
                       <img width="57" height="57"  :src="chiditem.icon" alt="">
                     </div>
                     <div class="content">
                       <h2 class="name">{{chiditem.name}}</h2>
                       <p class="desc">{{chiditem.description}}</p>
                        <div class="extra">月售{{chiditem.sellCount}}   好评率{{chiditem.rating}}%</div>
                     <div class="price">
                       <span class="now">&yen;{{chiditem.price}}</span>
                        <span class="old" v-show="chiditem.oldPrice">&yen;{{chiditem.oldPrice}}</span>
                       </div>
                     </div>
                     <div class="cartcontrol-wrapper">
                        <div class="cartcontrol">
                          <div class="cart-decrease move-transition" v-show="cartNum>0">
                            <span class="inner icon-remove_circle_outline" @click="removeCircle()">-</span>
                          </div>
                          <div class="cart-count" v-show="cartNum>0">{{cartNum}}</div>
                          <div class="cart-add icon-add_circle" @click="addCircle()">+</div>
                      </div>
                     </div>
                   </li>
                 </ul>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
   const ERR_OK = 0
    export default{
        data () {
         return {
           goods:[],
           cartNum:0,
           showcurrent:100
       }
    },
    methods: {
         addCheKmenu (event) {
          console.log(this)
           this.className = 'current'
         },
        addCircle () {
        this.cartNum += 1
      },
      removeCircle () {
           this.cartNum -= 1
      }
    },
      created () {
        axios.get('/api/goods').then(
                res => {
                if (res.data.errno === ERR_OK) {
                  this.goods = res.data.data
                }
              })
      }
       }
</script>

<style>
  .goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
  }
  .goods .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
 .goods .menu-wrapper .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        padding: 0 12px;
        line-height: 14px;
 }
 .goods .menu-wrapper .menu-item .text {
         display:table-cell;
         width:56px;
         vertical-align:middle;
         font-size: 14px;
         border-top: 1px solid rgba(7,17,27,0.1);
 }
 .goods .menu-wrapper .menu-item span:after
{    
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7,17,27,0.1);
    content: ' ';
}
 .current{
        position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
 }
.goods .foods-wrapper .title{
   padding-left: 14px;
   height:24px;
   line-height: 26px;
   border-left: 2 solid #d9dde1;
   font-size:12px;
   color: #93999f;
   background: #f3f5f7
}
 .goods .foods-wrapper .food-item
 {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;

 }
 .goods .food-item .icon{
   flex: 0 0 57px;
   margin-right: 10px;
 }
  .goods .food-item .content{
   flex: 1;
 }
 .goods .food-item .content .name{
   margin: 2px 0 8px 0;
   height:14px;
   line-height: 14px;
   font-size: 14px;
   color: #07111b;
 }
 .goods .food-item .content .desc{
   line-height: 12px;
   margin-bottom: 8px;
   font-size: 10px;
    color: #93999f;
 }
 .goods .food-item .extra{
   line-height: 10px;
   margin-bottom: 8px;
   font-size: 10px;
   color: #93999f;
 }
  .goods .food-item .price{
   line-height: 10px;
    font-size: 10px;
    color: #93999f;
 }
 .goods .foods-wrapper .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: #f01414;
}
.goods .foods-wrapper .food-item .content .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: #93999f;
}
 .goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 0;
    bottom: 12px;
}
/*.icon-remove_circle_outline:before {
content: "\E908";
}*/

/*购物车减少*/
.cartcontrol-wrapper{
    position: absolute;
    right: 0;
    bottom: 12px;
}
.cartcontrol {
    font-size: 0;
}
.cartcontrol .cart-decrease {
    display: inline-block;
    padding: 6px;
     font-size: 24px;
      color: #00a0dc;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
}
.cartcontrol .cart-count{
  display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: #93999f;
}
/*购物车添加*/
.cartcontrol .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: #00a0dc;
}
</style>

