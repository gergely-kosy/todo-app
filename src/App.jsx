import "./App.scss";
import configureStore, { Persistor } from "./store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate loading={<div>Loading...</div>} persistor={Persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
