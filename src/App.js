import { getDefaultNormalizer } from "@testing-library/react";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/orgamisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { useState, useCallback, useMemo } from "react";
// import { ChildArea } from "./ChildArea";
import { Router } from "./router/Router";

const user = {
  name: "jakee",
  image:
    "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email: "hello@gmail.com",
  phone: "090-0000-0000",
  company: {
    name: "テスト株式会社",
  },
  website: "https://aaa.com",
};

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
      <DefaultLayout>
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link> */}
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>Test</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
      <Router />
    </BrowserRouter>
  );
}
