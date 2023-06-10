import { makeAutoObservable } from 'mobx';
import { CommentsFormStore } from './commentsFormStore';
import { AuthStore } from './authStore';
import { UiStore } from './uiStore';

class RootStore {
    constructor() {
        this.commentFormStore = null;
        this.authStore = null;
        this.uiStore = null;
        makeAutoObservable(this);

        this.commentFormStore = new CommentsFormStore();
        this.authStore = new AuthStore();
        this.uiStore = new UiStore();
    }
}

export { RootStore };
