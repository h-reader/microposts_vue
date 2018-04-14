import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';
import axios from 'axios';

/** Profile Mutation */
export const mutations: MutationTree<ProfileState> = {

    /**
     * 認証情報取得成功後の処理
     * @param state State
     * @param payload レスポンス
     */
    profileLoaded(state, payload) {
        state.error = false;
        state.user = payload.data as User;
        const headerInfo = payload.headers;
        state.accessToken = headerInfo['access-token'];
        state.client = headerInfo.client;
        state.uid = headerInfo.uid;
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
