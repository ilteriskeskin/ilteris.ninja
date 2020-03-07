<template>
  <div id="app" class="main">
    <div class="container">
      <h3 class="postTitle">{{ post.title }}</h3>
      <p class="postContent">{{ post.content }}</p>
      <img :src="post.image">
      <p class="postDate">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
  import jsonPosts from '../statics/posts/new1';

  export default {
    name: "Post",

    data() {
      return {
        id: this.$route.params.id,
        post: [],
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },

    created() {
      this.post = jsonPosts.posts[this.id - 1];
    }
  }
</script>

<style scoped>

  img {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 500px;
  }

  .main {
    margin-bottom: calc(7% + 10px);
  }

  .postContent {
    line-height: 30px;
  }

  .postDate {
    margin-top: 15px;
  }

  .postTitle {
    margin-bottom: 20px;
    font-weight: bold;
  }

</style>
