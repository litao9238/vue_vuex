import Vue from 'vue'
import vuex from 'vuex'


// 主框架以及公共部分
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

// 各模块自己相关的内容
import xxxx from './modules/xxxx'

Vue.use(vuex);
export default new vuex.Store({
	// 在开发环境启用严格模式,无论何时发生了状态变更且不是由 mutation 函数引起的, 将会抛出错误
	strict: process.env.NODE_ENV !== 'production',
	state,
	mutations,
	actions,
	getters,
	modules: {
		xxxx
	}
})
