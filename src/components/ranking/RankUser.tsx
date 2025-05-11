import * as S from "./Rankin.style";
import card from "@assets/image/card.png";
import left from "@assets/icons/chevron-right.svg";

const RankUser = () => {
  return (
    <S.UserContainer>
      <S.RankScore>
        <p>1</p>
      </S.RankScore>
      <p>조인어스조인어스</p>
      <S.CardCountCotainer>
        <img src={card} alt="카드 이미지" />
        <S.Text>:</S.Text>
        <p>93</p>
      </S.CardCountCotainer>
      <img src={left} alt="피드 보러가기" />
    </S.UserContainer>
  );
};

export default RankUser;
