import React, {createContext} from 'react';

import {RootStore} from '../../entities/rootStore';

type Props = {
  children: React.ReactChild;
};

const store = new RootStore();

export const StoreContext = createContext(store);

export const Provider: React.FC<Props> = ({children}) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
