<template>
    <div
      class="sidebar"
      v-bind:class="{is_open: isShow}">
        <SidebarProfile />
        <SidebarMenu />
        <SidebarFooter />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Getter } from 'vuex-class'
import SidebarMenu from '@/components/sidebar/SidebarMenu.vue'
import SidebarProfile from '@/components/sidebar/SidebarProfile.vue'
import SidebarFooter from '@/components/sidebar/SidebarFooter.vue'
const namespace = 'sidebar'

@Options({
  components: {
    SidebarMenu,
    SidebarProfile,
    SidebarFooter
  }
})
export default class Sidebar extends Vue {
  @Getter('isShow', { namespace }) isShow?: boolean;
}
</script>

<style lang="less" scoped>
.sidebar
{
  height: 100%;
  width: 90px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
}
.is_open
{
  width: 260px;
}
</style>
