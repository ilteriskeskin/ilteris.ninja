<template>
  <div id="app" class="main">
    <div class="container">
      <ul id="advices-li">
        <li v-for="category in categories">
          <span class="categories" @click="categoryLink(category)">
            <code>
              {{ category }}
            </code>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import jsonPosts from '../statics/posts/posts';

  export default {
    name: "Categories",
    data() {
      return {
        categories: [],
      }
    },
    created() {
      for (let i = 0; i < jsonPosts.posts.length; i++) {
        this.categories.push(jsonPosts.posts[i].category);
      }
      this.categories = new Set(this.categories);
    },
    methods: {
      categoryLink(category) {
        this.$router.push('/category/' + category);
      }
    }
  }
</script>

<style scoped>
  .main {
    margin-bottom: calc(15% + 10px);
  }

  li:hover {
    font-weight: bold;
  }

  #advices-li {
    line-height: 2em;
    font-style: italic;
    color: #d1cec9;
  }

  .categories {
    font-size: 24px;
    cursor: pointer;
  }
</style>
