import './App.css';
import { Container } from "semantic-ui-react";
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navi />
        <Container className="main">
          <Dashboard />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
