<template>
    <div class="sidebar__menu">
        <nav class="sidebar__nav">
            <router-link class="sidebar__nav-item"
                            v-for="route in this.menu()"
                            :key="route.path"
                            :to="route.path">
                    <img :src="image(route.name)" alt="">
                    <p>{{ route.name }}</p>
            </router-link>
        </nav>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { RouteRecordRaw } from 'vue-router'
import { menuRoutes } from '@/router/index'
export default class SidebarMenu extends Vue {
    menu: () => Array<RouteRecordRaw> = menuRoutes;
    image (imageName: string) {
      if (this.$router.currentRoute.value.name === imageName) {
        return require(`./assets/${imageName}_active.svg`)
      } else {
        return require(`./assets/${imageName}.svg`)
      }
    }
}
</script>

<style lang="less" scoped>

    .sidebar__menu
    {
        margin-top: 150px;
        height: 100%;
    }

    .sidebar__nav
    {
        padding: 0px 20px 0px 20px;

        .router-link-active
        {
            background-color: #9C28B0 !important;
            color:white !important;
        }

        &-item
        {
            height: 50px;
            display: flex;
            padding: 0px 13px;
            align-items: center;
            text-decoration: none;
            font-family: 'Ubuntu';
            color: #757575;
            font-size: 16px;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 10px;
            transition: all 0.3s;
            p
            {
                font-weight: 500;
                margin: 0px 0px 0px 20px;
            }
            img
            {
                height: 25px;
                width: 25px;
            }

            &:hover
            {
                background-color: #F6F6F6;
            }
        }

    }

</style>
