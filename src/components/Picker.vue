<template>
  <div class="m-picker" v-if="show">

    <div class="m-picker-mark"></div>
    <div class="m-picker-box">
      <div class="m-picker-header">
        <span @click="cancel">取消</span>
        <span @click="sel">确定</span>
      </div>
      <div class="m-picker-content">
        <div class="m-picker-item-box" v-if="type=='datePicker'">
          <PickerItem :val.sync="year" :selType="'year'" :change="change" :d="dataList[0]"></PickerItem>
          <PickerItem :val.sync="month" :selType="'month'" :change="change" :d="dataList[1]"></PickerItem>
          <PickerItem :val.sync="day" :selType="'day'" :change="change"  :d="dataList[2]"></PickerItem>
        </div>
        <div class="m-picker-item-box" v-else>
            <PickerItem v-for="(i,k) in dataList" :key="k"  :change="change" :d="i"></PickerItem>
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
      type:'picker',
      dataList:[],
      year:1,
      month:1,
      day:1,

      onOk(e){
        console.log(e)
      },
      onCancel(){

      }
    }
  },
  computed:{
    isR(){
      return this.year%4==0?true:false;
    }
  },
  methods:{
    sel(){
      this.show = false;
      this.onOk(this.year+'-'+this.month+'-'+this.day)
    },
    itemSel(){

    },
    setMonth(){
      let c2 = this.month == 2;
      let c1 = [1,3,5,7,8,10,12].join().indexOf(this.month);
      let m = '',newM  = [];
      if(c2){
        if(this.isR){
          m = [1,29];
        }else{
          m= [1,28];
        }
      }else if(c1<0){
        m = [1,30];
      }else{
        m = [1,31];
      }
      for(let i=1;i<=m[1];i++){
        newM.push(i+'日')
      }
      this.dataList[2] = newM;

    },
    change(val,key,type = ''){
      console.log(val,key,type);
      if(type=='day'){
        this.day = key+1;
      }else if(type=='year'){
        this.year = val.match(/\d*/g)[0];
        this.setMonth()
      }else if(type=='month'){
        this.month = key+1;
        this.setMonth()
      }
    },
    cancel(){
      this.show = false;
      this.onCancel()
    },
  },
  mounted(){
    this.setMonth()
  },
  components:{
    PickerItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

