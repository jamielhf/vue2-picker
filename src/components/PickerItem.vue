<template>
  <div class="m-picker-item" :style="domStyle" @touchstart="start" @touchend="end" @touchmvoe="move">
      <div class="m-scroller-indicator"></div>
    <div class="m-scroller-mask"></div>
      <div v-for="(i,k) in d" class="m-scroller-item">
        <div>{{i}}</div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        startY:'', //touch start Y
        endY:'', //touch end Y
        changeY:'', //sY - eY
        domStyle:{}
    }
  },
  methods:{
    scroll(){
      domStyle = {'trans' }
    },
    start(e){
      console.log(e.touches[0])
//      this.startY = e.touches[0].pageY;
    },
    end(e){
      console.log(e.touches[0])
//      this.endY = e.touches[0].pageY;
    },
    move(e){

    }
  },
  props:{
      d:{
         default:function () {
           return []
         }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

