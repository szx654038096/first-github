<template>
  <div class="newsifo-container">
    <!-- 主标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 次标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content">

    </div>
    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>  
</template>

<script>
import { Toast } from 'mint-ui';
import comment from '../subcomponents/comment.vue';

export default {
  data(){
    return {
      id:this.$route.params.id,
      newsinfo:{}
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    getNewsInfo() {
      this.$http.get('api/getnew/' + this.id).then(result => {
        // console.log(result.body);
        if(result.body.status == 0) {
          this.newsinfo = result.body.message[0]
        } else {
          Toast('获取新闻详情失败！')
        }
      })
    }
  },
  components:{
    "comment-box": comment
  }
}
</script>

<style lang="scss" scoped>
  .newsifo-container {
    padding: 0 5px;
    .title {
      font-size: 16px;
      color: red;
      margin: 15px 0;
      text-align: center;
    }
    .subtitle {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      color: #226aff;
    }
    .content {
      img {
        width: 100%;
      }
    }
  }
</style>
