import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

  Vue.use(Vuex)

  var state = {
      data:'',
      uid:'',
  }
  
  const actions = {
        getWeather(context){
            axios({
                method: "get",
                url: "https://bird.ioliu.cn/weather",
                params: {
                   city:state.uid
                }
              })
                .then(response => {
                  context.commit('changeData',response.data)
                })
                .catch(function(error) {
                  console.log(error);
                });
        }
  }

  const mutations = {
    changeData (state,obj){
        state.data = obj
    }
  }

  const store = new Vuex.Store({
      state,
      actions,
      mutations
  })

  export default store;