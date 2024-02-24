export type MongoUser = User & {
    _id: string;
}

export type UseUserStoreType = {
    isLogin: boolean,
    setIsLogin: (trigger: boolean) => void;

    userInfo: MongoUser | null,
    setUserInfo: (value: MongoUser) => void;

    setLogout: () => void;
}