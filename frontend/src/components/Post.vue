<template>
  <div id="app" class="main">
    <div class="container">
      <VueIntroduction v-if="id == 0"></VueIntroduction>
      <CoronaCounterApp v-if="id == 1"></CoronaCounterApp>
      <BasicChart v-if="id == 2"></BasicChart>
      <InstallZshOnFedora v-if="id == 3"></InstallZshOnFedora>
      <GnuLinuxPackageManagement v-if="id == 4"></GnuLinuxPackageManagement>
      <PythonTricks v-if="id == 5"></PythonTricks>
    </div>
  </div>
</template>

<script>
  import VueIntroduction from "./posts/VueIntroduction";
  import CoronaCounterApp from "./posts/CoronaCounterApp";
  import BasicChart from "./posts/BasicChart";
  import InstallZshOnFedora from "./posts/InstallZshOnFedora";
  import GnuLinuxPackageManagement from "./posts/GnuLinuxPackageManagement";
  import PythonTricks from "./posts/PythonTricks";

  export default {
    name: "Post",

    components: {
      VueIntroduction,
      CoronaCounterApp,
      BasicChart,
      InstallZshOnFedora,
      GnuLinuxPackageManagement,
      PythonTricks,
    },

    data() {
      return {
        id: this.$route.params.id,
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },
  }
</script>

<style scoped>
  .main {
    margin-bottom: calc(15% + 10px);
  }

</style>
