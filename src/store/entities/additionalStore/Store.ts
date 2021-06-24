class AdditionalStore {
  init = (): Promise<{isLoaded: boolean}> => {
    return new Promise(res => {
      setTimeout(() => res({isLoaded: true}), 100);
    });
  };
}

export default AdditionalStore;
