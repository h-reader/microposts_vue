import { MutationTree } from 'vuex';
import { MicropostsState, Micropost } from './types';
import axios from 'axios';

/** Microposts Mutation */
export const mutations: MutationTree<MicropostsState> = {

    /**
     * Micropost投稿成功時の処理
     * @param state State
     * @param payload Micropost[]
     */
    tweetsucceed(state, payload: Micropost[]) {
        state.error = false;
        state.microposts = payload;
    },

    /**
     * Micropost投稿失敗時の処理
     * @param state State
     */
    tweetError(state) {
        state.error = true;
    },

};
