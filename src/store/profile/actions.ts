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

    /**
     * サインアップ
     * @param param0 commit
     * @param payload email: メールアドレス, password: パスワード, password_confirmation: パスワード(確認用), name: ユーザ名
     */
    async signup({ commit }, payload: {
        email: string, password: string, password_confirmation: string, name: string}): Promise<boolean> {

        try {
            const api = AxiosApiUtil.getAxios();
            const response = await api.post('/auth', payload);
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

    /**
     * ログイン状態確認
     * @param param0 commit
     */
    async checkLogin({ commit }): Promise<boolean> {
        try {
            const api = AxiosApiUtil.getAxiosWithAuth();
            const response = await api.get('/auth/validate_token');
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

    /**
     * ログアウト
     */
    logout({ commit }) {
        AxiosApiUtil.removeAuthInfo();
        commit(ProfileMutationType.logout);
    },
};
