import { ActionTree } from 'vuex';
import AxiosApiUtil from '@/util/axios-api-util';
import { MicropostsState, Micropost, MicropostsMutationType } from './types';
import { RootState } from '../types';

/** Microposts Action */
export const actions: ActionTree<MicropostsState, RootState> = {

    /**
     * Micropostを投稿する
     * @param param0 commit
     * @param payload userId: ユーザID, content: 投稿内容
     */
    async tweet({ commit }, payload: {user_id: string, content: string}): Promise<boolean> {
        try {
            const api = AxiosApiUtil.getAxiosWithAuth();
            await api.post('/microposts', payload);
            const response = await api.get('/user/' + payload.user_id + '/microposts');
            commit(MicropostsMutationType.tweetsucceed, response.data as Micropost[]);
            return true;
        } catch (error) {
            commit(MicropostsMutationType.tweetError);
            return false;
        }
    },

    /**
     * Micropostを削除する
     * @param param0 commit
     * @param payload id: MicropostのID, user_id: ユーザID
     */
    async deleteTweet({ commit }, payload: {id: string, user_id: string}) {
        try {
            const api = AxiosApiUtil.getAxiosWithAuth();
            await api.delete('/microposts/' + payload.id);
            const response = await api.get('/user/' + payload.user_id + '/microposts');
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
     * @param payload userId: ユーザID
     */
    async getTweetList({ commit }, payload: {userId: string}): Promise<boolean> {
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
