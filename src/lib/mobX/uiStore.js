import { makeAutoObservable } from 'mobx';

class UiStore {
    constructor(rootStore) {
        this.message = '';

        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
        this.rootStore = rootStore;
    }

    setErrorMessage(newMessage) {
        this.message = newMessage;
    }

    resetError() {
        this.message = '';
    }

    get errorMessage() {
        return this.message;
    }
}

export { UiStore };
