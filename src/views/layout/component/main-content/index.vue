<template>
    <div class="main-container">
       <sidebarNav/>
       <Content/>
    </div>
</template>

<script>
import sidebarNav from './sidebar-nav'
import Content from './content'
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
        sidebarNav,
        Content
    }
}
</script>
