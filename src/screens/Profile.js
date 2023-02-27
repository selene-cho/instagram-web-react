import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserFeeds } from "../api";

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
  gap: 10px;
  margin-top: 50px;
`;
const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
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
  const { username } = useParams();
  console.log("username", username);

  const { data } = useQuery(["feeds/", username], getUserFeeds);
  console.log("data", data);

  return (
    <>
      <Header>
        <ProfileImg src={data ? data[0].user.profileImg : ""} />
        <ProfileInfo>
          <Row>
            <Username>{data ? data[0].user.username : ""}</Username>
            <FollowBtn>&nbsp;팔로우버튼</FollowBtn>
          </Row>
          <Row>
            <div>3&nbsp;</div>
            <div>followers &nbsp;</div>
            <div>10&nbsp;</div>
            <div>following</div>
          </Row>
          <Row>
            <div>{data ? data[0].user.profileIntroduce : ""}</div>
          </Row>
        </ProfileInfo>
      </Header>

      <Contents>
        {data?.map((feed) => (
          <Feed key={feed.id} bg={feed.contentImg}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {feed.likesNum}
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {feed.reviewsNum}
              </Icon>
            </Icons>
          </Feed>
        ))}
      </Contents>
    </>
  );
}

export default Profile;
