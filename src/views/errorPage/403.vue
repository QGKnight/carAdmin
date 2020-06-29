<template>
    <div style="background:#f0f2f5;margin-top: -20px;height:100%;">
        <div class="wscn-http404">
            <div class="pic-404"></div>
            <div class="bullshit">
                <div class="bullshit__headline">{{ message }}</div>
                <div class="bullshit__info">对不起，你没有权限</div>
                <a @click="backToHome" class="bullshit__return-home">返回首页</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page401',
    data() {
        return {}
    },
    methods: {
        backToHome() {
            this.$router.push('/')
        }
    },
    computed: {
        message() {
            return '对不起，你没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限没有权限'
        }
    }
}
</script>

