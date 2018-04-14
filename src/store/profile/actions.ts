import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User, MutationType } from './types';
import { RootState } from '../types';

/** Profile Action */
export const actions: ActionTree<ProfileState, RootState> = {

    /**
     * ログイン
     * @param param0 commit
     * @param payload [1]email: string, [2]password: string
     */
    async login({ commit }, payload): Promise<boolean> {

        try {
            const response = await axios.post('https://shrouded-dusk-75907.herokuapp.com/api/auth/sign_in', payload);
            commit(MutationType.profileLoaded, response);
            return true;
        } catch (error) {
            commit(MutationType.profileError);
            return false;
        }
    },
};
