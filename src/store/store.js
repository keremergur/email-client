import { createStore } from 'vuex';

import auth from './auth';
import emails from './emails';

const store = createStore({
    modules: {
        auth, emails,
    },
});

export default store;
