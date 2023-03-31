import React from 'react';
import 'react-native-gesture-handler';
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

export default App;