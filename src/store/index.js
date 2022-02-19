import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './user'
import posts from './Posts';

export default new Vuex.Store({
    modules: {
        user,
        posts
    }
});