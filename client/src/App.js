import "./App.css";
import { Home, Landing, Form, Detail } from "./views";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
function App() {
  const location= useLocation();
  return (
    <div className="App">
      <h1>The World Dogs</h1>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={()=><Landing />} />
      <Route exact path="/home" render={()=><Home />} />
      <Route exact path="/from" render={()=> <Form />  } />
      <Route exact path="/detail" render={()=><Detail />} />
      <Route exact path="/detail/:id" render={()=><Detail />} />
    </div>
  );
}

export default App;
