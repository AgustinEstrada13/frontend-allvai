import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Frame from './Frame';
import './app.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Frame} />
        <Redirect to='/login' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
