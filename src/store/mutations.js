import Vue from 'vue'

export default {
    addCount(state, payload) {
        payload.count += 1
    },
    addItems(state, payload) {
        Vue.set(payload, 'checked', true)
        // payload.checked = true
        state.cartList.push(payload)
    },
    checkChange(state, payload) {
        payload.checked = !payload.checked
    },
    allChecked(state) {
        for (let item of state.cartList) {
            item.checked = true
        }
    },
    allNoChecked(state) {
        for (let item of state.cartList) {
            item.checked = false
        }
    }
}