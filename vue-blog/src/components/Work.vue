<template>
  <div id="app" class="main">
    <div class="container">
      <vue-command class="term term-std"
                   :commands="commands">
      </vue-command>
    </div>
  </div>
</template>

<script>
  import VueCommand from 'vue-command';
  import 'vue-command/dist/vue-command.css';

  export default {
    name: "Work",

    components: {
      VueCommand
    },

    data() {
      return {
        commands: {
          start: ({comm, _}) => {
            //alert('Savaşlara yönleniyorsunuz...')
            return this.redirectPokemonWar();
          }
        }
      }
    },

    methods: {
      redirectPokemonWar() {
        this.$router.push({ path: '/pokemon-war' });
      }
    }
  }
</script>

<style scoped>

  .main {
    margin-bottom: calc(15% + 10px);
  }

  .term {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }

  .term-std {
    min-height: 300px;
    max-height: 300px;
    overflow-y: scroll;
  }

</style>
