<template>
  <div>
    <h3>评论子组件</h3>

    <hr>

    <textarea placeholder="请输入你要评论的内容(最多输入200字)" maxlength="200" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dataFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === '' ? '此用户很懒，没说什么' : item.content }}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data(){
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    }
  },
  created(){
    this.getComments()
  },
  methods: {
    getComments(){
      this.$http.get("api/getcomments/"+ this.id +"?pageindex=" + this.pageIndex).then(result=>{
        // console.log(result.body);
        if(result.body.status == 0) {
          this.comments = this.comments.concat(result.body.message)
        } else {
          Toast('获取评论列表失败！')
        }
      })
    },
    getMore(){
      this.pageIndex++;
      this.getComments();
    },
    postComment(){
      if(this.msg.trim().length == 0){
        Toast('评论内容不能为空！')
      }

      this.$http.post('api/postcomment/' + this.$route.params.id, { content:this.msg.trim() }).then( result => {
        // console.log(result.body);
        if(result.body.status == 0){
          var cmt = {
            user_name: '匿名用户',
            add_time: Date.now(),
            content: this.msg.trim()
          };
          this.comments.unshift(cmt);
          this.msg = ""
        }
      })
    }
  },
  props:["id"]
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-top: 20px;
}

textarea {
  margin-bottom: 0;
  font-size: 14px;
  height: 90px;
}
.cmt-list {
  .cmt-item {
    margin: 5px 0;
    .cmt-title {
      line-height: 35px;
      background-color: #777;
      font-size: 14px;
    }
    .cmt-body {
      line-height: 35px;
      font-size: 16px;
      text-indent: 2em;
    }
  }
}
</style>
