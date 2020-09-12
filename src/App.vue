<template>
  <div id="app">
    <Sidebar />
    <main v-bind:class="{is_open: isShow}">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Getter } from 'vuex-class'
import Sidebar from '@/components/sidebar/Sidebar.vue'
@Options({
  components: {
    Sidebar
  }
})
export default class App extends Vue {
    @Getter('isShow', { namespace: 'sidebar' }) isShow?: boolean;
}
</script>

<style lang="less">

#app, html, body
{
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
}

#app
{
  display: flex;
}

main
{
  width: 100%;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left:110px;
  transition:all 0.3s;
}

main.is_open
{
  padding-left:280px !important;
}

</style>
