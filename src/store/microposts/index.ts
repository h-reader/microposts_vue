import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { MicropostsState } from './types';
import { RootState } from '../types';

/** Microposts State */
export const state: MicropostsState = {
    microposts: undefined,
    error: false,
};

/** Microposts Store */
const namespaced: boolean = true;
export const microposts: Module<MicropostsState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
