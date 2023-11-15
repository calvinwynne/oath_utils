"use client";

import "./App.scss";
import OAuthForm from "./components/OauthForm";
import { HeaderWSideNav } from "./components/IBMHeader";

function App() {
  return (
    <div className="App-main">
      <HeaderWSideNav></HeaderWSideNav>
      <OAuthForm></OAuthForm>
    </div>
  );
}

export default App;
