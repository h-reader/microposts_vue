import { ActionTree } from 'vuex';
import AxiosApiUtil from '@/util/axios-api-util';
import { ProfileState, User, ProfileMutationType } from './types';
import { RootState } from '../types';

/** Profile Action */
export const actions: ActionTree<ProfileState, RootState> = {

    /**
     * ログイン
     * @param param0 commit
     * @param payload email: メールアドレス, password: パスワード
     */
    async login({ commit }, payload: {email: string, password: string}): Promise<boolean> {

        try {
            const api = AxiosApiUtil.getAxios();
            const response = await api.post('/auth/sign_in', payload);
            const headers = response.headers;
            AxiosApiUtil.setAuthInfo(response.headers);
            commit(ProfileMutationType.profileLoaded, { user: response.data.data });
            return true;
        } catch (error) {
            AxiosApiUtil.removeAuthInfo();
            commit(ProfileMutationType.profileError);
            return false;
        }
    },
};
