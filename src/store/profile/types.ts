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

export enum ProfileActionType {
    login = 'login',
    signup = 'signup',
}

export enum ProfileMutationType {
    profileLoaded = 'profileLoaded',
    profileError = 'profileError',
}

export enum ProfileGetterType {
    isLogin = 'isLogin',
}
