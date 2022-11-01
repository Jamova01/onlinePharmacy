import Home from "../pages";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;