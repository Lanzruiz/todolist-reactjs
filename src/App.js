import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/layout/Dashboard/Dashboard";
import CreateTask from "./components/layout/CreateTask/create-task";
import Alert from "./components/layout/Alert";
import { Routes, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/auth";
import setAuthToken from "../src/utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Landing} />
          <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path="create-task"
            element={<PrivateRoute component={CreateTask} />}
          />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/login" Component={Login} />
        </Routes>
      </Fragment>
    </Provider>
  );
};

export default App;
