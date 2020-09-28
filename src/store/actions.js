import Vue from 'vue'
export default {

    checkChange(context, payload) {
        context.commit('checkChange', payload)
    },
    addCart({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                commit('addCount', oldProduct)
                resolve('数量+1')
            } else {
                Vue.set(payload, 'count', 1)
                commit('addItems', payload)
                resolve('添加成功')


            }
        })


    },
    allChecked({
        commit
    }) {
        commit('allChecked')
    },
    allNoChecked({
        commit
    }) {
        commit('allNoChecked')
    }
}