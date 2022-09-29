<template>
    <div class="header-container">{{ title }}</div>
</template>

<script>
export default {
    props: {
        title: {
            default: '标题',
            type: String
        }
    }
};
</script>

<style lang="less" scoped>
.header-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 45px;

    font-size: 12px;

    color: #fff;
    background-color: #1d7bff;
}
</style>
