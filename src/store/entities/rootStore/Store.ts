import {action, makeObservable, observable} from 'mobx';
import {AdditionalStore} from '../additionalStore';

import {UserStore} from '../userStore';

class RootStore {
  userStore: UserStore<RootStore>;

  additionalStore: AdditionalStore;

  isLoading: boolean;

  isError: boolean;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      isError: observable,
      toggleLoading: action,
      toggleError: action,
    });

    this.isLoading = true;
    this.isError = false;

    this.userStore = new UserStore<RootStore>(this);
    this.additionalStore = new AdditionalStore();

    this.initApp();
  }

  initApp(): void {
    Promise.all([this.userStore.init(), this.additionalStore.init()]).then(this.toggleLoading, er => {
      this.toggleLoading();
      this.toggleError();
      console.log(er);
    });
  }

  toggleLoading = (): void => {
    this.isLoading = !this.isLoading;
  };

  toggleError = (): void => {
    this.isError = !this.isError;
  };
}

export default RootStore;
