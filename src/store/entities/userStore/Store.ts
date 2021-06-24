class UserStore<T> {
  rootStore: T;

  constructor(rootStore: T) {
    this.rootStore = rootStore;
  }

  init = (): Promise<{isLoaded: boolean}> => {
    return new Promise(res => {
      // eslint-disable-next-line prefer-promise-reject-errors
      setTimeout(() => res({isLoaded: true}), 100);
    });
  };
}

export default UserStore;
