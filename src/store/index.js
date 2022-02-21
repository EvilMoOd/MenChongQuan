import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './user'
import posts from './Posts';
import detail from './detail';

export default new Vuex.Store({
    modules: {
        user, posts, detail
    }
});