import "./App.css";
import Navigacja from "./component/Common/Navigacja";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import BootstrapFooter from "./component/Common/BootstrapFooter";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authAction";

function App() {
  useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <React.Fragment>
        <Helmet>
          <title>Anielska kuchnia</title>
        </Helmet>
        <Navigacja />
        <BootstrapFooter />
      </React.Fragment>
    </Provider>
  );
}

export default App;
