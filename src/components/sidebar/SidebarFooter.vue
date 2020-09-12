<template>
    <div class="sidebar__footer">
        <button
            class="sidebar__arrow"
            v-bind:class="{arrow_rotate: isShow}"
            v-on:click="switchView()">
            <img src="@/components/sidebar/assets/next.svg" alt="">
        </button>
    </div>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class'
import { Vue } from 'vue-class-component'
const namespace = 'sidebar'
export default class SidebarFooter extends Vue {
    @Getter('isShow', { namespace }) isShow?: boolean;
    @Action('switchView', { namespace }) switchView?: void;
}
</script>

<style lang="less" scoped>
    .sidebar__footer
    {
        margin: 20px;
        min-height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .sidebar__arrow
    {
        cursor: pointer;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 6px;
        background-color: #EFEFEF;
        img
        {
            width: 15px;
            height: 15px;
            transition: all 0.3s;
        }
    }

    .arrow_rotate
    {
        img
        {
            transform: rotate(180deg);
        }
    }
</style>
