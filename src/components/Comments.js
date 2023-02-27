import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const CommentsContainer = styled.div`
  max-width: 630px;
  margin-top: 20px;
`;
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CommentAuthor = styled.span`
  font-weight: 600;
  margin: 0 10px;
`;
const CommentAuthorImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 5px;
`;
const CommentContent = styled.span``;
const CommentLikes = styled.span`
  margin: 0 15px;
`;

function Comments({ author, caption, comments, commentNumber }) {
  return (
    <CommentsContainer>
      <CommentContainer>
        <CommentAuthor>{author}</CommentAuthor>
        <CommentContent>{caption}</CommentContent>
      </CommentContainer>
      <CommentCount>댓글 {commentNumber}개 모두 보기</CommentCount>

      {comments?.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentAuthorImg src={comment.user.profileImg} />
          <CommentAuthor>{comment.user.username}</CommentAuthor>
          <CommentContent>{comment.caption}</CommentContent>
          <CommentLikes>
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faThumbsUp} />
            {comment.likesNum}개
          </CommentLikes>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}

export default Comments;
