<template>
    <div class="home-container">
        <van-nav-bar title="头条标题" :fixed="true" />

        <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name"
                    :cmtCount="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI'

import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
    name: 'Home',
    components: {
        ArticleInfo
    },
    data() {
        return {
            page: 1,
            limit: 10,
            artlist: [],
            loading: true,
            finished: false,  // 所有数据是否加载完毕
            isLoading: false
        };
    },
    created() {
        this.initArticleList();
    },
    methods: {
        // 获取文章列表
        async initArticleList(isRefresh) {
            const { data: res } = await getArticleListAPI(this.page, this.limit);

            if (isRefresh) {
                // 新数据在前，旧数据在后
                this.artlist = [...res, ...this.artlist];
                this.isLoading = false;
            } else {
                // this.artlist = [...this.artlist, ...res];
                this.artlist.push(...res);
                this.loading = false;
            }

            if (res.length === 0) {
                this.finished = true;
            }
        },
        onLoad() {
            console.log('触发了 load 事件');
            this.page++;
            this.initArticleList();
        },
        onRefresh() {
            // 下来请求新数据，放在头部，让用户看到最新数据
            this.page++;
            this.initArticleList(true);
        }
    }
};
</script>

<style lang="less" scoped>
.home-container {
    padding: 46px 0 50px;

    /* .van-nav-bar {
        background-color: #007bff;
    }

    :deep(.van-nav-bar__title) {
        color: #fff;
    } */
}
</style>
