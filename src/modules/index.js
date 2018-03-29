
import PickerCom from '../components/Picker.vue'
import { mergeOptions } from './util'
import '../css/calendar.scss'

let Picker = {};


Picker.install = function (Vue) {

    let t = new Date();

    Vue.prototype.$picker= {}

    let  CalendarMainCom = Vue.extend(PickerCom)

    let instance = new CalendarMainCom({
        el: document.createElement('div')
    })

    document.body.appendChild(instance.$el);

    Vue.prototype.$picker.show  = (settings={})=>{
      let date =  new Date()
        instance =  Object.assign(instance, {
            show :true,
            type:'picker', //默认选择器
            data:[],
            year:date.getFullYear(),
            month:date.getMonth()+1,
            day:date.getDate(),
            endTime:'',
            date:'',
            onOk(e){
              console.log(e)
              console.log('选中回调')
            },
            onCancel(){
              console.log('取消回调')
            }
        })

//如果是日期模式
      console.log(settings)
      if(settings.type=='datePicker'){
        let years = settings.years || [1950,2050];
        if(settings.date){
          let t = settings.date.split('-');
          //验证输入的年的范围是否正确
         if(settings.years){
           if(t[0]>=settings.years[0]&&t[0]<=settings.years[1]){
             settings.year = +t[0];
             settings.month = +t[1];
             settings.day = +t[2];
           }else if(date.getFullYear()<settings.years[0]&&date.getFullYear()>settings.years[1]){
             years =  [1950,2050];
           }
         }else{
           if(t[0]>=1950&&t[0]<=2050){
             settings.year = +t[0];
             settings.month = +t[1];
             settings.day = +t[2];
           }
         }


        }

        let months = [1,12];
        let days = [1,30];
        let yearsList =[],monthsList = [],daysList = [];

        for(;years[0]<=years[1];years[0]++){
          yearsList.push(years[0]+'年')
        }
        for(;months[0]<=months[1];months[0]++){
          monthsList.push(months[0]+'月')
        }
        for(;days[0]<=days[1];days[0]++){
          daysList.push(days[0]+'日')
        }

        settings.dataList = [
          yearsList,monthsList,daysList
        ]
      }

     mergeOptions(instance, settings)
      console.log(instance)

    }
    Vue.prototype.$picker.hide  = ()=>{
        instance.show = false
    }

}
export  default Picker


