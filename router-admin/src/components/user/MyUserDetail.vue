<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <h4 class="text-center">用户详情 --- {{ $route.params.id }} --- {{ id }}</h4>
    <p class="text-center">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['id', 'name']
}
</script>

<style lang="less" scoped>

</style>
