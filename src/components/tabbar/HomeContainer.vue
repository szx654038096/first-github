<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h1>HomeContainer</h1>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data(){
    return {
      lunbotuList: []
    }
  },
  created(){
    this.getLunbotu()
  },
  methods: {
    getLunbotu(){
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then( result => {
        // console.log(result.body);
        if(result.body.status == 0) {
          this.lunbotuList = result.body.message
        } else {
          Toast("加载轮播图失败！")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  // .mint-swipe-item {
  //   &:nth-child(1) {
  //     background-color: cyan;
  //   }
  //   &:nth-child(2) {
  //     background-color: pink;
  //   }
  //   &:nth-child(3) {
  //     background-color: purple;
  //   }
  // }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
