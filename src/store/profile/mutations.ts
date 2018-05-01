import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

/** Profile Mutation */
export const mutations: MutationTree<ProfileState> = {

    /**
     * 認証情報取得成功後の処理
     * @param state State
     * @param payload user: ログインしたユーザ情報
     */
    profileLoaded(state, payload: {user: User}) {
        state.error = false;
        state.user = payload.user;
    },

    /**
     * 認証エラー時の処理
     * @param state State
     */
    profileError(state) {
        state.error = true;
        state.user = undefined;
    },

    /**
     * ログアウト時の処理
     * @param state State
     */
    logout(state) {
        state.error = false;
        state.user = undefined;
    },
};
