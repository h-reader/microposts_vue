import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '../types';

/** Profile State */
export const state: ProfileState = {
    user: undefined,
    error: false,
    accessToken: undefined,
    client: undefined,
    uid: undefined,
};

/** Profile Store */
const namespaced: boolean = true;
export const profile: Module<ProfileState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
