<template>
    <div class="sliders">
        <el-menu
            :collapse="isSidebarNavCollapse"
            background-color="#304156"
            text-color="#eee"
            active-text-color="#4dbcff"
            :default-active="currentMenu"
        >
            <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
        </el-menu>
    </div>
    
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isCollapse: true
        }
    },
    computed: {
        ...mapState(['isSidebarNavCollapse']),
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
<style lang="less" scoped>
.sliders{
    position: fixed;
    top:80px;
    bottom:0;
    width:200px;
    background: rgb(48, 65, 86);
}
.el-menu{

    border-right-width: 0;

}
</style>
