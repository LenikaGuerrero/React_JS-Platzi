import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Badges from "../pages/Badges"; // Importar Componente
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {
  //Se puede hacer si no se tienen estados
  return (
    //Switch toma la direccion que esta en el navegador y renderiza la primera que coincida
    //exact especifica que la ruta es exacta
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
