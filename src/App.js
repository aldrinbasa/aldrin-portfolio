import { Fragment } from "react";

import "./App.css";
import NavigationBar from "./header/NavigationBar/NavigationBar";
import Profile from "./profile/Profile";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Profile />
    </Fragment>
  );
}

export default App;
