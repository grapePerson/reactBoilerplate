import React from 'react';
import {observer} from 'mobx-react';

import {useStore} from '../../store';
import {SideBar, RouterMap} from './components';

const Layout: React.FC = observer(() => {
  const store = useStore();

  if (store.isLoading) {
    return <div>Loading</div>;
  }

  if (store.isError) {
    return <div>app error</div>;
  }

  return (
    <div className='main-content'>
      <SideBar />
      <RouterMap />
    </div>
  );
});

export default Layout;
