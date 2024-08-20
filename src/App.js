import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
// import { useState, useCallback, useMemo } from "react";
// import { ChildArea } from "./ChildArea";
import { Router } from "./router/Router";

export default function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);

  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };
  // const onClickOpen = () => {
  //   setOpen(!open);
  // };
  // const onClickClose = useCallback(() => setOpen(false), []);

  // const temp = useMemo(() => 1 + 3, []);
  // console.log(temp);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
