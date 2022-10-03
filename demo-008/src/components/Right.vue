<template>
    <div class="right-container">
        <h3>Right 组件</h3>
        <button @click="sendGet">发起 GET 请求</button>

    </div>
</template>

<script>
import { getArticleListAPI } from '@/api/commonAPI.js'

export default {
    data() {
        return {
            page: 1,
            length: 5
        }
    },
    methods: {
        async sendPost() {
            const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 20 });
            console.log(res)
        },
        async sendGet() {
            const { data: res } = await getArticleListAPI(this.page, this.length);
            console.log(res)
        }
    }
};
</script>

<style lang="less">
.right-container {
    padding: 0 20px 20px;
    background-color: lightskyblue;
    min-height: 250px;
    flex: 1;
}
</style>