import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/orgamisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { UserProvider } from "./providers/UserProvider";
// import { useState, useCallback, useMemo } from "react";
// import { ChildArea } from "./ChildArea";
// import { Router } from "./router/Router";

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

  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    // <UserProvider>
    //   <Router />
    // </UserProvider>
    // <RecoilRoot>
    //   <UserProvider>
    //     <Router />
    //   </UserProvider>
    // </RecoilRoot>
    <>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </>
  );
}
