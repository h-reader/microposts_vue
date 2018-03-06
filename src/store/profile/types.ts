export interface User {
    id: number;
    email: string;
    uid: string;
    name: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}

export enum ActionType {
    login = 'login',
}

export enum MutationType {
    profileLoaded = 'profileLoaded',
    profileError = 'profileError',
}

export enum GetterType {
    test = 'test',
}
