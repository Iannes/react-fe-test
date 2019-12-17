import React from 'react';
import Applayout from 'Modules/components/common/AppLayout';
import AppRouter from 'Modules/routers/AppRouter';
import 'Modules/core/index.scss';

const App = () => {
  return (
    <Applayout>
      <AppRouter />
    </Applayout>
  )
}

export default App;
