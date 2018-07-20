<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- <keep-alive>是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。 -->
    <!-- include: 字符串或正则表达式。只有匹配的组件会被缓存。
    exclude: 字符串或正则表达式。任何匹配的组件都不会被缓存。 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// 根组件
export default {
  name: 'App'
}
</script>

<style>
</style>
