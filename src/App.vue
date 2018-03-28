<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
      this.$picker.show({
        dataList:[['1','2','3','4','5','6','7','8','9','1','2','3','4','5']]
      })
  }
}
</script>

<style>

</style>
