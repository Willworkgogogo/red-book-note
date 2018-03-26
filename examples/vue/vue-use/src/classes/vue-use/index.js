import Vue from 'vue'
import {Plugins1, Plugins2} from './plugins'

Vue.use(Plugins1, '参数1', '参数2')
Vue.use(Plugins2, '参数A', '参数B')