import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Loading from './components/Loading';

import "./styles.css";

const WeddingPage = React.lazy(() => import('./pages/WeddingPage'))

const App = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={Loading}>
          <Switch>
            {
              /*
                <Route path='/' exact>
                 <MainPage />
               </Route>
               <Route path='/nuestra-boda'>
                 <WeddingPage />
               </Route>
               <Route path='/mis-15'>
                 <FithteenPage />
               </Route>
               <Route path='/mi-primer-bautismo'>
                 <BaptismPage />
               </Route>
               */
            }
            <Route path='*'>
              <WeddingPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}

export default App