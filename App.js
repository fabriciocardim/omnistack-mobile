import React, { Fragment } from 'react';
import { StatusBar, YellowBox } from "react-native";

import Routes from "./src/routes";

//ignorar o warning do websockt 
YellowBox.ignoreWarnings ([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      <Routes/>
    </Fragment>
    
  );
}
