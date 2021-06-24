import {useContext} from 'react';

import {StoreContext} from '../components/Provider';
import {RootStore} from '../entities/rootStore';

const useStore = (): RootStore => {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return rootStore;
};

export default useStore;
