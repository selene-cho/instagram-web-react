import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faBookmark,
  faHeart,
  faPaperPlane,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
// import Avatar from "../components/Avartar";
import Comments from "../components/Comments";
// import Profile from "../screens/Profile";
import { Link } from "react-router-dom";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
  margin-bottom: 60px;
  background-color: white;
`;
const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;
const Nickname = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  border: 1px solid rgb(239, 239, 239);
`;
const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
`;
const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const FeedAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;
const FeedActionContainer = styled.div`
  padding: 12px 15px;
`;
const Likes = styled.span`
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;

function Feed({
  id,
  contentImg,
  caption,
  user,
  likesNum,
  reviewsNum,
  reviews,
  isLiked,
}) {
  return (
    <FeedContainer key={id}>
      <FeedHeader>
        <Avatar src={user.profileImg} />
        <Link
          to={`/profile/${user.username}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Nickname>{user.username}</Nickname>
        </Link>
      </FeedHeader>
      <FeedPhoto src={contentImg} />

      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: true ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : faHeart}
              />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon icon={faComment} />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </FeedAction>
          </div>

          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </FeedWrapper>
        <Likes>{likesNum} likes</Likes>
        <Comments
          key={id}
          author={user.username} // ?????????
          caption={caption} // feeds ??????
          comments={reviews} // ????????? (?????? ?????????, ????????????)
          commentNumber={reviewsNum} // ?????? ??????
        />
      </FeedActionContainer>
    </FeedContainer>
  );
}
export default Feed;
