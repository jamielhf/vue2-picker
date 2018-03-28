
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


    console.log(instance)
    Vue.prototype.$picker.show  = (settings={})=>{
        instance =  Object.assign(instance, {
            show :true,
            data:[]
        })

     mergeOptions(instance, settings)
      console.log(instance)

    }
    Vue.prototype.$picker.hide  = ()=>{
        instance.show = false
    }




}
export  default Picker


