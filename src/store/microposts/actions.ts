import { ActionTree } from 'vuex';
import AxiosApiUtil from '@/util/axios-api-util';
import { MicropostsState, Micropost, MicropostsMutationType } from './types';
import { RootState } from '../types';

/** Microposts Action */
export const actions: ActionTree<MicropostsState, RootState> = {

    /**
     * Micropostを投稿する
     * @param param0 commit
     * @param payload [1]userId: string, [2]content: string
     */
    async tweet({ commit }, payload): Promise<boolean> {
        try {
            const api = AxiosApiUtil.getAxiosWithAuth();
            await api.post('/microposts', payload);
            const response = await api.get('/user/' + payload.userId + '/microposts', payload);
            commit(MicropostsMutationType.tweetsucceed, response.data as Micropost[]);
            return true;
        } catch (error) {
            commit(MicropostsMutationType.tweetError);
            return false;
        }
    },

    /**
     * ユーザに紐づくMicropostを取得する
     * @param param0 commit
     * @param payload [1]userId: string
     */
    async getTweetList({ commit }, payload): Promise<boolean> {
        try {
            const api = AxiosApiUtil.getAxiosWithAuth();
            const response = await api.get('/user/' + payload.userId + '/microposts');
            commit(MicropostsMutationType.tweetsucceed, response.data as Micropost[]);
            return true;
        } catch (error) {
            return false;
        }
    },
};
