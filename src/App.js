import React from "react";
import { Provider } from "react-redux";
import { TodoApp } from "./pages/TodoApp";
import store from "./redux/store";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TodoApp />
    </Provider>
  );
}

export default App;
