import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// Route enums
import { APP_ROUTE } from 'Types';
import Spinner from 'Modules/components/common/Spinner';
// Lazy loaded components
const Dashboard = React.lazy(() => import('Modules/pages/Dashboard'));
const NotFoundPage = React.lazy(() => import('Modules/pages/NotFound'));
const DetailsPage = React.lazy(() => import('Modules/pages/Details'));

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route exact path={APP_ROUTE.HOME} render={() => <Dashboard />} />
          <Route path="/:id" children={<DetailsPage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
