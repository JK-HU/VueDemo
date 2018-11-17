import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


Vue.use(Vuex)

//让外部可以访问,并实例化Vuex
export const store = new Vuex.Store({
    state : {  //存储属性状态
        menuItems : {},
        currenUser : null,
        isLogin : false
    },
    getters,
    mutations,
    actions
})