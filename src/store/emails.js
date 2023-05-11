
export default {
    state() {
        return {
            userInbox: [],
        };
    },
    getters: {
        userInbox(state) {
            return state.userInbox;
        },
    },
    mutations: {
        loadEmails(state,payload) {
            state.userInbox = payload;
        }
    },
    actions: {
        async fetchAllEmails(context) {
            const response = await fetch(url);
            const emails = response.json();
            return emails;
        },
        fetchUserInbox(context) {
            const emails = context.dispatch('fetchAllEmails');
            const currentUser = context.rootGetters.currentUser;
            const filtered = emails.filter(email => email.to === currentUser);
            context.commit('loadEmails',filtered);
        }
    }
};
