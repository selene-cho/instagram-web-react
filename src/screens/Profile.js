import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  max-width: 630px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 4px;
`;
const ProfileImg = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background-color: #e8f5e9;
  margin: 0 50px;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;
const Username = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-right: 10px;
`;
const FollowBtn = styled.div`
  cursor: pointer;
`;
const Contents = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
`;
const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: 50% 0%;
  position: relative;
`;
const Icons = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;
function Profile() {
  return (
    <div>
      <Header>
        <ProfileImg src="https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg" />
        <ProfileInfo>
          <Row>
            <Username>HEE</Username>
            <FollowBtn>&nbsp;팔로우버튼</FollowBtn>
          </Row>
          <Row>
            <div>3&nbsp;</div>
            <div>followers &nbsp;</div>
            <div>10&nbsp;</div>
            <div>following</div>
          </Row>
          <Row>
            <div>소개글</div>
          </Row>
        </ProfileInfo>
      </Header>
      <Contents>
        <Feed bg="http://cdn.ksilbo.co.kr/news/photo/202206/938335_532280_3749.jpg">
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              1004
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              123
            </Icon>
          </Icons>
        </Feed>
        <Feed bg="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg" />
        <Feed bg="https://post-phinf.pstatic.net/MjAyMTA4MDJfODEg/MDAxNjI3ODg4MDY0OTcw.JlG6dn6u55h-OuWpe5MH9tWrieUyXcbrJXtGAqjMX_Ug.kOwoCCvzxo7x3f4qicCnHMMbdkFwmMw5vPEaePxK4BYg.JPEG/%EA%B0%95%EC%95%84%EC%A7%80_%EC%9D%B4%EA%B0%88%EC%9D%B4%EC%8B%9C%EA%B8%B000.jpg?type=w1200" />
        <Feed bg="https://cdn.eyesmag.com/content/uploads/posts/2022/03/22/main-d3bbc024-549a-4a23-9c08-5cb675d6b028.jpg" />
        <Feed bg="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG" />
        <Feed bg="https://cdnweb01.wikitree.co.kr/webdata/editor/202103/02/img_20210302105652_f4642f08.webp" />
      </Contents>
    </div>
  );
}

export default Profile;
