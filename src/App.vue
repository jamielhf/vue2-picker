<template>
  <div id="app">
    <p @click="t">时间</p>
    <p>{{date}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return{
          date:'2010-3-2'
        }
  },
  methods:{
      t(){
        this.$picker.show({
          type:'datePicker',
          date:this.date,
          endTime:'2015-02-11',
          onOk:(e)=>{
            this.date = e;
          },

        })
      }
  },
  mounted(){

  }
}
</script>

<style>

</style>
