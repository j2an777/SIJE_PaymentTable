import { useState } from "react";
import "./App.css";
import fetchMock from "./apis/mockApi";

function App() {
  const res = fetchMock().then((res) => console.log("res: ", res));

  return <></>;
}

export default App;
