import "./App.css";
import Inicio from "./pages/Inicio";
import Register from "./pages/Register";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Switch>
          <Route component={Inicio} path="/" />
          <Route component={Register} path="/registro" />
          <Route component={Home} path="/home" />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
