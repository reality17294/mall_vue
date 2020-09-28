  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  export default new Vuex.Store({
      state: {
          cartList: []
      },
      mutations: {
          addCount(state, payload) {
              payload.count++
          },
          addItems(state, payload) {
              payload.count = 1
              payload.checked = true
              state.cartList.push(payload)
          },
          checkChange(state, payload) {
              payload.checked = !payload.checked
          }
      },
      actions: {
          checkChange(context, payload) {
              context.commit('checkChange', payload)
          },
          addCart({
              state,
              commit
          }, payload) {
              if (state.cartList.find(item => item.iid === payload.iid)) {
                  commit('addCount', payload)
              } else {
                  commit('addItems', payload)

              }

          }
      },
      modules: {}
  })