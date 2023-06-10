import { makeAutoObservable } from 'mobx';

class CommentsFormStore {
    constructor(rootStore) {
        this.postId = '';

        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
        this.rootStore = rootStore;
    }

    setPostId(newPostId) {
        this.postId = newPostId;
    }

    get selectedPostId() {
        return this.postId;
    }
}

export { CommentsFormStore };
