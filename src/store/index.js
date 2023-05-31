import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            data: { email: "bashka" },
            token: 123
        }
    },
    getters: {},
    mutations: {
        login(state, email) {
            state.email = email;
            localStorage.setItem('email', email);
            alert('Logged in');
        },
        logout(state) {
            state.email = "";
            localStorage.removeItem('email');
            alert('Logged out');
        },
        initialiseStore(state) {
            if (localStorage.getItem('email')) {
                state.email = localStorage.getItem('email');
            }
        }
    },
    modules: {},
    actions: {}

})
export default store;