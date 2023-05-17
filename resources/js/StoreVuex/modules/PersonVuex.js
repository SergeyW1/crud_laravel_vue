import {createStore} from "vuex";

export const useStoreVuex = createStore({
    state() {
        return {
            count: 0
        }
    },
    actions: { // Логические методы
        increment(context) {
            context.commit('increment')
        }
    },
    getters: { // Это метод который позволяет достать state
        getCount(state) {
            return state.count
        }
    },
    mutations: { // Метод который позволяет переопределять state
        increment(state) {
            state.count++
        }
    }
})
