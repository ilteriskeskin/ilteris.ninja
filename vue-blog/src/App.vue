<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-primary" @click="saveUser">Save User</button>
        <button class="btn btn-success" @click="getUsers">Get Users</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: null
    }
  },
  methods: {
    saveUser() {
      this.$http.post('https://vuejs-vue-resource-40b21.firebaseio.com/users.json', { userName: this.userName })
      .then((response) => {
        console.log(response);
      })
    },

    getUsers() {
      this.$http.get("https://vuejs-vue-resource-40b21.firebaseio.com/users.json")
      .then(((response) => {
        console.log(response.data); // response.body alternative
      }))
    }
  },
}
</script>

<style>
#app {
  margin-top: 100px;
}
</style>
