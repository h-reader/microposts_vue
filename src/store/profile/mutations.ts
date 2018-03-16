import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

/** Profile Mutation */
export const mutations: MutationTree<ProfileState> = {

    /**
     * 認証情報取得成功後の処理
     * @param state State
     * @param payload ユーザ情報
     */
    profileLoaded(state, payload: User) {
        state.error = false;
        state.user = payload;
    },

    /**
     * 認証エラー時の処理
     * @param state State
     */
    profileError(state) {
        state.error = true;
        state.user = undefined;
    },
};