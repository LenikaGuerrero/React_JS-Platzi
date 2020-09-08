import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges"; // Importar Componente
import BadgeNew from "../pages/BadgeNew";

function App() {
  //Se puede hacer si no se tienen estados
  return (
    //Switch toma la direccion que esta en el navegador y renderiza la primera que coincida
    //exact especifica que la ruta es exacta
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
