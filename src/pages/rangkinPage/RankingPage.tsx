import RankHeader from "@components/ranking/RankHeader";
import RankUser from "@components/ranking/RankUser";
import styled from "styled-components";
const RankingPage = () => {
  return (
    <Wrapper>
      <RankHeader />
      <UserContainer>
        <RankUser />
        <RankUser />
        <RankUser />
        <RankUser />
        <RankUser />
        <RankUser />
      </UserContainer>
    </Wrapper>
  );
};

export default RankingPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
