import axios, { AxiosInstance } from 'axios';

export default class AxiosApiUtil {

    /**
     * axiosインスタンスを取得
     */
    public static getAxios(): AxiosInstance {
        return axios.create({
            baseURL: this.API_URL,
        });
    }

    /**
     * 認証情報付のaxiosインスタンスを取得
     */
    public static getAxiosWithAuth() {
        return axios.create({
            baseURL: this.API_URL,
            headers: {
                'access-token': localStorage.getItem(this.ACCESS_TOKEN_KEY),
                'client': localStorage.getItem(this.CLINET_KEY),
                'uid': localStorage.getItem(this.UID_KEY),
            },
        });
    }

    /**
     * レスポンスヘッダから認証情報をローカルストレージに保存する
     * @param headers APIのレスポンスヘッダ
     */
    public static setAuthInfo(headers: any) {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, headers[this.ACCESS_TOKEN_KEY]);
        localStorage.setItem(this.CLINET_KEY, headers[this.CLINET_KEY]);
        localStorage.setItem(this.UID_KEY, headers[this.UID_KEY]);
    }

    /**
     * ローカルストレージ上の認証情報を削除する
     */
    public static removeAuthInfo() {
        localStorage.removeItem(this.ACCESS_TOKEN_KEY);
        localStorage.removeItem(this.CLINET_KEY);
        localStorage.removeItem(this.UID_KEY);
    }

    /** APIのURL */
    private static readonly API_URL: string = 'https://shrouded-dusk-75907.herokuapp.com/api';

    /** APIのAccessToken */
    private static readonly ACCESS_TOKEN_KEY = 'access-token';
    /** APIのclient */
    private static readonly CLINET_KEY = 'client';
    /** APIのuid */
    private static readonly UID_KEY = 'uid';

}
