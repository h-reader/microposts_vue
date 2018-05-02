export interface Micropost {
    id: number;
    content: string;
    user_id: number;
    created_at: Date;
    update_at: Date;
}

export interface MicropostsState {
    microposts?: Micropost[];
    error: boolean;
}

export enum MicropostsActionType {
    tweet = 'tweet',
    getTweetList = 'microposts/getTweetList',
}

export enum MicropostsMutationType {
    tweetsucceed = 'tweetsucceed',
    tweetError = 'tweetError',
}

export enum MicropostsGetterType {
}
