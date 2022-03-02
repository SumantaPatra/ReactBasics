import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import { RQsuperHeros } from './component/RQsuperHeros';
import { SuperHeros } from './component/SuperHeros';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Individual } from './component/individual'
import { ParallelQueries } from './component/ParallelQueries'
import { DependentQueries } from './component/DependentQueries';
const queryclient = new QueryClient()
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryclient}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/Home'>Home</Link>
              </li>
              <li>
                <Link to='/SuperHeros'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/RQsuperHeros'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          {/* <Routes>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/SuperHeros'>
            <SuperHeros />
          </Route>
          <Route path='/RQsuperHeros'>
            <RQsuperHeros />
          </Route>
        </Routes> */}
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/SuperHeros' element={<SuperHeros />} />
            <Route path='/RQsuperHeros' element={<RQsuperHeros />} />
            <Route path='/individual/:id' element={<Individual />} />
            <Route path='/parallel' element={< ParallelQueries />} />
            <Route path='/depend' element={< DependentQueries email='vishwas@example.com' />} />

          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>

    </Router>
  );
}

export default App;
