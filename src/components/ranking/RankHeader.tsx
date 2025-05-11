import styled from "styled-components";
import info from "@assets/icons/info.svg";

const RankHeader = () => {
  return (
    <Wrapper>
      TOP 20
      <img src={info} alt="랭킹 탭 설명 보기" />
    </Wrapper>
  );
};

export default RankHeader;

const Wrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;

  img {
    width: 24px;
  }
`;
