import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

/** Profile Getter */
export const getters: GetterTree<ProfileState, RootState> = {
  isLogin(state): boolean {
    return state.user != null;
  },
};
