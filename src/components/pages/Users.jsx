import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../orgamisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `jakee-${val}`,
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "hello@gmail.com",
    phone: "090-0000-0000",
    company: {
      name: "テスト株式会社",
    },
    website: "https://aaa.com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => {
        <UserCard key={user.id} user={user} />;
      })}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
