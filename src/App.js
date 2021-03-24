import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/index";
import "./App.css";
import Layout from "./components/Layout";

// Initialize redux store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
