/**
 * Created by Administrator on 2017/9/20.
 */
export default {
    state:{
      count:0
    },
  mutations: {
    // 修改state，第一个参数就是state
    increment(state) {
      state.count++
    },
    // 提交载荷 Payload，第一个参数就是state，第二个参数是载荷。
    add(state, n) {
      state.count += n
    }
  },
  actions: {
    // 这里使用content来提交mutations
    increment (context) {
      context.commit('increment')
    },
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    incrementAsyncWithValue (context, value) {
      setTimeout(() => {
        context.commit('add', value)
      }, 1000)
    }
  },
  getters: {
    done(state) {
      return state.count + 5;
    },
  }
}

