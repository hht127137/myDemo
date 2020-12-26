import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		attrVal:[],
		attrTxt:''
	},
	mutations:{
		getAttr(state,data){
			state.attrVal=data.chooseAttr;
			state.attrTxt=data.goodsAttr;
		},
		//清除默认值
		defaultAttr(state,data){
			state.attrVal=[];
			state.attrTxt='';
		}
	}
})

export default store