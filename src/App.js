import React from "react";
import "./App.css";
import Siderbar from "./Siderbar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/* Siderbar */}
      <Siderbar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
