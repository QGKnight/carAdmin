<template>
    <div :class="{navCollapsed:isSidebarNavCollapse}">
        <topAside />
        <mainContent/>
    </div>
</template>

<script>
import topAside from './component/top-aside'
import mainContent from './component/main-content/index'
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
        topAside,
        mainContent
    }
}
</script>

<style lang="less" scoped>

</style>
