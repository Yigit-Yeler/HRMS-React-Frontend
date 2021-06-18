import './App.css';
import { Container } from "semantic-ui-react";
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Register />
      {/*<Navi />
      <Container className="main">
        <Dashboard />
      </Container>*/}
    </div>
  );
}

export default App;
