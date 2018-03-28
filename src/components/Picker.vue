<template>
  <div class="m-picker" v-if="show">

    <div class="m-picker-mark"></div>
    <div class="m-picker-box">
      <div class="m-picker-header">
        <span>取消</span>
        <span>确定</span>
      </div>
      <div class="m-picker-content">
        <div class="m-picker-item-box" v-if="dataList.length>0">
          <PickerItem v-for="(i,k) in dataList" :d="i"></PickerItem>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
 import '../css/calendar.scss'
 import PickerItem from './PickerItem.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      show:false,
      dataList:[]
    }
  },
  components:{
    PickerItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

