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
    logout = 'logout',
}

export enum ProfileMutationType {
    profileLoaded = 'profileLoaded',
    profileError = 'profileError',
    logout = 'logout',
}

export enum ProfileGetterType {
    isLogin = 'profile/isLogin',
}
