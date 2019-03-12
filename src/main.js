import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'window': {
      'navigationBarBackgroundColor': '#ea5149',
      'navigationBarTextStyle': 'black',
      'navigationBarTitleText': '牛牛图书简谱',
      'backgroundColor': '#eeeeee',
      'backgroundTextStyle': 'light'
    }
  }
}
