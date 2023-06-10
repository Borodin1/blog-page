import { makeAutoObservable } from 'mobx';

class AuthStore {
    constructor(rootStore) {
        this.authToken = null;

        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
        this.rootStore = rootStore;
    }

    setToken(newToken) {
        this.authToken = newToken;
    }

    get token() {
        return this.authToken;
    }
}

export { AuthStore };
