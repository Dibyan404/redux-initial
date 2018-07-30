import React, { Component } from "react";
import HelloWorld from './Components/HelloWorld';
import ButtonGroup from './Components/ButtonGroup';
// import reducer from './Reducers';
import { store } from "./Store";


// const initialState = {name: 'Calie'};
// const store = createStore(reducer,initialState);


class App extends Component {
  // state = {
  //   tech: "React"
  // };
  render() {
    return [
      <HelloWorld key = {1} tech={store.getState().tech} />,
      <ButtonGroup key = {2} technologies = {['React','React-redux','Elm']} />
    ];
  }
}

export default App;
