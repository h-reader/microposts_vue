import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './store/types';
import { profile } from './store/profile/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        profile,
    },
};

export default new Vuex.Store<RootState>(store);
