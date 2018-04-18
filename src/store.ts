import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './store/types';
import { profile } from './store/profile/index';
import { microposts } from './store/microposts/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        profile,
        microposts,
    },
};

export default new Vuex.Store<RootState>(store);
